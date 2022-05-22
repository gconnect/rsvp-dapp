"reach 0.1";

export const main = Reach.App(() => {

  const TicketMarketPlace = Participant('TMP', {
    takePlatformFee: UInt,
    ready: Fun([], Null)
  });

  const Organizer = Participant('Organizer', {
    ticket: Token,
    ticketFee: UInt,
    // ticketSold: Fun([], UInt),
    deadline: UInt,
    reward: UInt,
    rewardToken: Token,
    // payPlatformFee: UInt,
    ready: Fun([], Null)
    // resellProfit: UInt
  });

  const RSVPier = API('RSVPier', {
    isRSVP: Fun([], Bool),
    buyTicket: Fun([UInt], Null)
    // sellTicket: UInt
  });

  const Checkin = API('CHK', {
    isCheckin: Fun([Address], Bool),
    isTime:  Fun([], Bool),
    // acceptReward: Fun([UInt], Null)
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
    // const totalSold = declassify(interact.ticketSold);
    const deadline = declassify(interact.deadline);
    const rewardToken = declassify(interact.rewardToken)
    const reward = declassify(interact.reward)
    // const payPlatformFee = declassify(interact.payPlatformFee);
  });
  Organizer.publish(ticket, ticketFee, deadline, rewardToken, reward);
  commit();
  Organizer.publish()
  Organizer.interact.ready();
  // Organizer.pay(payPlatformFee);
  // transfer(payPlatformFee).to(TicketMarketPlace)


  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();

  const [ rsvpied, howMany ] =
    parallelReduce([true, 0])
    .invariant(balance(ticket) == howMany * ticketFee)
    .invariant(RSVPs.Map.size() == howMany)
    .while( rsvpied )
    .api_(RSVPier.isRSVP, () => {
      check( ! RSVPs.member(this), "You have not rsvpied" );
      return [ ticketFee, (k) => {
        k(true);
        transfer(ticketFee * howMany).to(Organizer)
        RSVPs.insert(this);
        return [ rsvpied, howMany + 1 ];
      }];
    })
    .api_(Checkin.isCheckin, (who) => {
      check( this == Organizer, "you are the organizer");
      check( RSVPs.member(who), "yep" );
      return [ 0, (k) => {
        k(true);
        transfer(reward).to(who);
        RSVPs.remove(who);
        return [ rsvpied, howMany - 1 ];
      }];
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(Checkin.isTime);
      k(true);
      return [ false, howMany ]
    });
    const leftovers = howMany;
    transfer(leftovers * reward).to(Organizer);
    commit();
    exit();

});