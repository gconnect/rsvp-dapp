"reach 0.1";

export const main = Reach.App(() => {

  const TicketMarketPlace = Participant('Platform', {
    takePlatformFee: UInt,
    ready: Fun([], Null)
  });

  const Organizer = Participant('Organizer', {
    ticket: Token,
    ticketFee: UInt,
    deadline: UInt,
    transferReward: Fun([Bool, UInt], Null),
    rewardToken: Token,
    ready: Fun([], Null),
    amt : UInt
  });

  const RSVPier = API('RSVPier', {
    isRSVP: Fun([Address], Bool),
    buyTicket: Fun([UInt], Null)
  });

  const Checkin = API('CHK', {
    isCheckin: Fun([Address], Bool),
    isTime:  Fun([], Bool),
  });

  const ViewBalance = View('Bals', {
    ticket: UInt,
    rewardToken: UInt
  });

  init();

  TicketMarketPlace.only(() => {
    const platformFee = declassify(interact.takePlatformFee);
  });
  TicketMarketPlace.publish(platformFee);
  TicketMarketPlace.interact.ready();
  commit();

  Organizer.only(() => {
    const ticket = declassify(interact.ticket);
    const ticketFee = declassify(interact.ticketFee);
    const deadline = declassify(interact.deadline);
    const rewardToken = declassify(interact.rewardToken)
    const amt = declassify(interact.amt)

    assume(ticket != rewardToken);
    assume(amt <= UInt.max);

  });
  Organizer.publish(ticket, ticketFee, rewardToken, deadline, amt);
  Organizer.interact.ready();
  commit();

  Organizer.publish();

  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();

  const [ keepGoing, howMany ] =
    parallelReduce([true, 0])
    .define(() => {
      ViewBalance.ticket.set(balance(ticket));
      ViewBalance.rewardToken.set(balance(rewardToken));
    })
    .invariant(balance() == howMany * ticketFee)
    .invariant(RSVPs.Map.size() == howMany)
    .while( keepGoing )
    .api_(RSVPier.isRSVP, (who) => {
      check( ! RSVPs.member(this), "not yet rsvpied" );
      return [ ticketFee, (k) => {
        k(true);
        transfer( amt, ticket).to(who);
        RSVPs.insert(this);
        return [ keepGoing, howMany + 1 ];
      }];
    })
    .api_(Checkin.isCheckin, (who) => {
      check( this == Organizer, "you are the Organizer");
      check( RSVPs.member(who), "yeah" );
      return [ 0, (k) => {
        k(true);
        transfer( amt, rewardToken).to(who);
        RSVPs.remove(who);
        return [ keepGoing, howMany - 1 ];
      }];
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(Checkin.isTime);
      k(true);
      return [ false, howMany ]
    });

  const leftovers = howMany;
  transfer(leftovers * ticketFee).to(Organizer);
  transfer(balance(ticket), ticket).to(Organizer);
  transfer(balance(rewardToken), rewardToken).to(Organizer);
  commit();
  exit();

});