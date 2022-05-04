"reach 0.1";

export const main = Reach.App(() => {

  const TicketMarketPlace = Participant('TMP', {
    takePlatformFee: UInt,
    ready: Fun([], Null)
  });

  const Organizer = Participant('Organizer', {
    ticket: Token,
    ticketFee: UInt,
    ticketSold: Fun([], UInt),
    deadline: UInt,
    payPlatformFee: UInt,
    ready: Fun([], Null)
    // resellProfit: UInt
  });

  const RSVPier = API('RSVPier', {
    setRSVP: Fun([], Bool),
    buyTicket: Fun([UInt], Null)
    // sellTicket: UInt
  });

  // const Checkin = API('Checkin', {
  //   setCheckin: Fun([Address], Bool),
  //   isTime:  Fun([], Bool),
  //   poapToken: Token
  // });

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
    const payPlatformFee = declassify(interact.payPlatformFee);
    const ready = declassify(interact.ready);
  });
  Organizer.publish(ticket,ticketFee, deadline, payPlatformFee);
  Organizer.interact.ready();
  commit();

  // Organizer.pay(payPlatformFee);
  // transfer(payPlatformFee).to(TicketMarketPlace)

  RSVPier.only(() => {
    const setRSVP = declassify(interact.setRSVP()); 
    const buyTicket = declassify(interact.buyTicket(ticketFee));
  });
  RSVPier.publish(setRSVP, buyTicket);
  commit();

  // Checkin.only(() => {
  //   const [setCheckin, isTime, poapToken] = declassify([interact.setCheckin, declassify.isTime, declassify.poapToken])
  // })
  // Checkin.publish(setCheckin,isTime,poapToken)
  // Checkin.publish()

  // const RSVPs = set();

});