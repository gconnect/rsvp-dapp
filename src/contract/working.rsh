"reach 0.1";

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
    ready: Fun([], Null),
  });

  const Organizer = Participant('Organizer', {
    getParams: getToken,
    ticketFee: UInt,
    deadline: UInt,
    ready: Fun([], Null),
    rewardAmt: UInt,
    rewardToken: Token,
    ...shared,
    isCheckin: Fun([], Bool),
    payPlatformFee: Fun([UInt], Null),
    isTicketSold: Fun([], Bool),
  });

  const RSVPier = Participant('RSVPier', {
    isRSVP: Fun([], Bool),
    buyTicket: Fun([UInt], Null),
    numberOfTicket: UInt,
    acceptToken: Fun([Token], Null),
    acceptReward: Fun([Token], Null),
    ...shared,
  });

  init();

  TicketMarketPlace.only(() => {
    const platformFee = declassify(interact.takePlatformFee);
  });
  TicketMarketPlace.publish(platformFee);
  TicketMarketPlace.interact.ready();
  commit();

  Organizer.only(() => {
    const ticketFee = declassify(interact.ticketFee);
    const deadline = declassify(interact.deadline);
    const rewardQuantity = declassify(interact.rewardAmt);
    const isCheckedIn = declassify(interact.isCheckin());
    const ticketSold = declassify(interact.isTicketSold());
    const rewardToken = declassify(interact.rewardToken);

    const { name, symbol, url, metadata, supply, amt } = declassify(interact.getParams());
    declassify(interact.payPlatformFee(platformFee))
    assume(amt <= supply);
    assume(amt <= UInt.max);
  });
  Organizer.publish(ticketFee, deadline, rewardQuantity,isCheckedIn,ticketSold,rewardToken,
    name, symbol, url, metadata, supply, amt);
   
    if(ticketSold === true){
      commit();
      Organizer.pay(platformFee);
      transfer(platformFee).to(TicketMarketPlace);
    }

  Organizer.interact.ready()
  require(amt <= supply);
  require(amt <= UInt.max);

  const md1 = {name, symbol, url, metadata, supply};
  const tok1 = new Token(md1);

  const reward = {name, symbol, url, metadata, supply}
  const participationToken = new Token(reward);

  commit();

  //RSVP
  RSVPier.only(() =>{
    const numTicket = declassify(interact.numberOfTicket)
    declassify(interact.buyTicket(ticketFee));
    declassify(interact.acceptToken(tok1))
    declassify(interact.acceptReward(participationToken))
  })
  RSVPier.publish(numTicket).pay(ticketFee);
  transfer(ticketFee).to(Organizer);
  commit();

  const doTransfer1 = (who, tokX) => {
    transfer(amt, tokX).to(who);
    who.interact.didTransfer(true, amt);
  };
  RSVPier.publish();
  doTransfer1(RSVPier, tok1);
  commit();

  Organizer.pay([[amt, tok1]]);
  commit();
  Organizer.publish();

  //REWARD TOKEN
  if(isCheckedIn){  
    commit();
    RSVPier.publish()
    doTransfer1(RSVPier, participationToken);
    commit();
    Organizer.pay([[amt, participationToken]]);
  }
  tok1.burn(supply);
  tok1.destroy();
  participationToken.burn();
  participationToken.destroy();
  commit();
  exit();
});
