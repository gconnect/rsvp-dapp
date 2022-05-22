import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

  const isOrganizer = await ask.ask(
    `Are you Organizer?`,
    ask.yesno
  );
  const who = isOrganizer ? 'Organizer' : 'Attendee';

  console.log(`Starting RSVP dapp ! as ${who}`);

  let acc = null;
  const createAcc = await ask.ask(
    `Would you like to create an account? (only possible on devnet)`,
    ask.yesno
  );
  if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask.ask(
      `What is your account secret?`,
      (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
  }

  let ctc = null;
  if (isOrganizer) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
  } else {
    const info = await ask.ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
  }

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async () => fmt(await stdlib.balanceOf(acc));
  const before = await getBalance();
  console.log(`Your balance is ${before}`);

  if (isOrganizer) {
    const ticket = await ask.ask(
      `Create Event Ticket`,
      stdlib.launchToken(acc, "EventTicket", "ET")
    );
    interact.ticket = ticket;

    const reward = await ask.ask(
      `Create Reward Token`,
      stdlib.launchToken(acc, "RewardToken", "RT")
    );
    interact.rewardToken = reward;

    const ticketFee = await ask.ask(
      `How much is the ticket?`,
      stdlib.parseCurrency
    );
    interact.ticketFee = ticketFee;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
    

  } else {
    interact.buyTicket = async (amt) => {
      const accepted = await ask.ask(
        `Do you accept the ticket fee of ${fmt(amt)}?`,
        ask.yesno
      );
      if (!accepted) {
        process.exit(0);
      }
    };
  }

  // const sbal = stdlib.parseCurrency(100);
  // const accD = await stdlib.newTestAccount(sbal);
  
  // const deadline = stdlib.connector === 'CFX' ? 500 : 250;
  
  // const ctcD = accD.contract(backend);

  // try {
  //   await ctcD.p.Organizer({
  //     ticket : ticket.id, 
  //     deadline,
  //     ticketFee: stdlib.parseCurrency(25),
  //     rewardToken: reward.id,
  //     ready: () => {
  //       console.log('The contract is ready');
  //       throw 42;
  //     }
  //   });
  // } catch (e) {
  //   if ( e !== 42) {
  //     throw e;
  //   }
  // }

  const accounts = await stdlib.newTestAccounts(3, sbal);

  const ctcWho = (whoi) =>
  accounts[whoi].contract(backend, ctc.getInfo());
  const rsvp = async (whoi) => {
    const who = accounts[whoi];
    const ctc = ctcWho(whoi);
    console.log('RSVP of', stdlib.formatAddress(who));
    await ctc.apis.RSVPier.isRSVP();
  };
  const do_checkin = async (ctc, whoi) => {
    const who = accounts[whoi];
    console.log('Check in of', stdlib.formatAddress(who));
    await ctc.apis.CHK.isCheckin(who);
  };

  const checkin = (whoi) => do_checkin(ctcD, whoi);
  // const bad_checkin = (whoi) => do_checkin(ctcWho(whoi), whoi);
  const isTime = async () => {
    console.log('Time is up');
    await ctcD.apis.Checkin.isTime();
  };
  
  await rsvp(0);
  await rsvp(1);
  await rsvp(2);
  await checkin(0);
      
  console.log(`We're gonna wait for the deadline`);
  await stdlib.wait(deadline);
  
  await isTime();
  
  for ( const who of [ accD, ...accounts ]) {
    console.warn(stdlib.formatAddress(who), 'has',
      stdlib.formatCurrency(await stdlib.balanceOf(who)));
  }
