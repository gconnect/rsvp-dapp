"reach 0.1";

//For better understanding of what the contract does or should do

//PLATFORM OWNER
// Platform owner charges a fee a percentage say 10% from every transaction/rsvp done

//EVENT ORGANIZER
// Event organizer charges a fee for the event. The event is in form of a non-network token ticket. 
//The number of ticket bought is the number of non-network token that will be transferred to 
//the attendee or rsvpier
//The organizer recieved payment in form of Algo (ticketFee * number of tickets)
// The event organizer gives all checkin attendee a reward token

//ATTENDEE OR RSPIER
// Event attendee or rsvp pays a fee to attend an event and receives a 
//non network reward token after attending the event/checkin

const shared = {
  didTransfer: Fun([Bool, UInt], Null),
}
const getToken = Fun([], Object({
  name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32),
  supply: UInt,
  amt: UInt,
}))

export const main = Reach.App(() => {
  const TicketMarketPlace = Participant('Platform', {
    takePlatformFee: UInt,
    ready: Fun([], Null)
  });

  const Organizer = Participant('Organizer', {
    getParams: getToken,
    ticket: Token,
    ticketFee: UInt,
    deadline: UInt,
    transferReward: Fun([Bool, UInt], Null),
    rewardToken: Token,
    ready: Fun([], Null),
    amt : UInt,
    checkBal: Fun(true, Null),
    ...shared,
  });

  const RSVPier = API('RSVPier', {
    isRSVP: Fun([Address], Bool),
    isRSVP1: Fun([Address], Null),
    payMe:  Fun([], Null),
    buyTicket: Fun([UInt], Null),
    acceptTicket: Fun([UInt], Null),
    acceptReward: Fun([UInt], Null),
    ...shared
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
    const amt2 = declassify(interact.amt)
    const { name, symbol, url, metadata, supply, amt } = declassify(interact.getParams());

    assume(ticket != rewardToken);
    assume(amt <= UInt.max);
    assume(amt <= supply);
    assume(amt <= UInt.max);

  });
  Organizer.publish(ticket, ticketFee, rewardToken, deadline, amt2, name, symbol, url, metadata, supply, amt);
  Organizer.interact.ready();
  require(amt <= supply);
  require(amt <= UInt.max);

  commit();
  Organizer.publish();

  const md1 = {name, symbol, url, metadata, supply};
  const ticketToken = new Token(md1);

  const reward = {name, symbol, url, metadata, supply};
  const participationReward = new Token(reward);
  // commit()

  const chkBal = (i) => {
    Organizer.interact.checkBal(i, balance(ticket), balance(rewardToken));
  };

  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();

  const [ keepGoing, howMany ] =
    parallelReduce([true, 0])
    .invariant(balance(ticketToken) == amt && balance(participationReward) == amt)
    .while( keepGoing)
    .api_(RSVPier.isRSVP, (who) => {
      check( ! RSVPs.member(this), "not yet rsvpied" );
      return [ ticketFee, (k) => {   
        k(true);
        transfer( amt, ticketToken).to(who);
        return [keepGoing, howMany + 1 ];
      }];
    })
    .api_(Checkin.isCheckin, (who) => {
      check( this == Organizer, "you are the Organizer");
      check( RSVPs.member(who), "yeah" );
      return [ 0, (k) => {
        k(true);
        transfer( amt, participationReward).to(who);
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
  transfer(balance(ticketToken), ticketToken).to(Organizer);
  transfer(balance(participationReward), participationReward).to(Organizer);
  commit();
  exit();

});
