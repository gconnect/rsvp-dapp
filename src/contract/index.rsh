"reach 0.1";

export const main = Reach.App(() => {
  const  getParams = Fun([], Object({
    name: Bytes(32), symbol: Bytes(8),
    url: Bytes(96), metadata: Bytes(32),
    supply: UInt,
    amt: UInt,
  }));

  const shared = {
    showToken: Fun(true, Null),
    didTransfer: Fun([Bool, UInt], Null),
  };

  const TicketMarketPlace = Participant('Platform', {
    takePlatformFee: UInt,
    ready: Fun([], Null)
  });

  const Organizer = Participant('Organizer', {
    tokenParams: getParams,
    ticket: Token,
    ticketFee: UInt,
    deadline: UInt,
    reward: UInt,
    rewardToken: Token,
    amount : UInt,
    ready: Fun([], Null),
    ...shared
  });

  const RSVPier = API('RSVPier', {
    isRSVP: Fun([], Bool),
    buyTicket: Fun([UInt], Null)
  });

  const Checkin = API('CHK', {
    isCheckin: Fun([Address], Bool),
    isTime:  Fun([], Bool),
  });

  const ViewBalance = View('Bals', {
    ticket: UInt,
    rewardToken: UInt,
    currentTok: Token,
  });

  const TokenEvent = Events({ tokenLaunch: [] });

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
    const reward = declassify(interact.reward)
   
    const amount = declassify(interact.amount);
     assume(ticket != rewardToken);
 
  });

  Organizer.publish(ticket, ticketFee, rewardToken, deadline, amount);
  

  commit();
  Organizer.publish()
  Organizer.interact.ready();


  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();

  const [ rsvpied, howMany ] =
    parallelReduce([true, 0])
    .invariant(balance() == howMany * ticketFee)
    .invariant(RSVPs.Map.size() == howMany)
    .while( rsvpied )
    .api_(RSVPier.isRSVP, () => {
      check( ! RSVPs.member(this), "You have not rsvpied" );
      return [ ticketFee, (k) => {
        k(true);
        // transfer(ticketFee * howMany).to(Organizer)
        transfer(ticketFee).to(Organizer)
        RSVPs.insert(this);
        return [ rsvpied, howMany + 1 ];
      }];
    })
    .api_(Checkin.isCheckin, (who) => {
      check( this == Organizer, "you are the organizer");
      check( RSVPs.member(who), "yeah" );
      return [ 0, (k) => {
        k(true);
        transfer(ticketFee).to(who);
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
    transfer(leftovers * ticketFee).to(Organizer);
    commit();
    exit();

});