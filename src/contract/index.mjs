import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib("ALGO");

  const startingbalance = stdlib.parseCurrency(100);

  //Account and starting balance of platform owner
  const accPlatform = await stdlib.newTestAccount(startingbalance);
  const ctcPlatform = accPlatform.contract(backend);

  //Account and starting balance of organizer
  const accOrganizer = await stdlib.newTestAccount(startingbalance);
  const ctcOrganizer = accOrganizer.contract(backend);

  const deadline = stdlib.connector === 500;


  //Platform Owner
  try{
    await ctcPlatform.p.Platform({
      takePlatformFee: stdlib.parseCurrency(5),
      ready: () => {
        console.log('The contract is ready');
        ctcPlatform.getInfo().then((info) => {
          console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
        throw 42;
      }
    })

  }catch(e){
    if ( e !== 42) {
      throw e;
    }
  }

  const ticket = await stdlib.launchToken(accOrganizer, "EventTicket", "ET")
  // console.log(ticket.id['_hex'])
  const reward =  await stdlib.launchToken(accOrganizer, "RewardTicket", "RT")
  // Event Organizer
  try {
    await ctcOrganizer.p.Organizer({
      ticket : ticket.id, 
      // deadline : 500,
      ticketFee: stdlib.parseCurrency(25),
      rewardToken: reward.id,
      ready: () => {
        console.log('The contract is ready');
        throw 42;
      }
    });
  } catch (e) {
    if ( e !== 42) {
      throw e;
    }
  }
  
  //Create 3 test accounts
  const accounts = await stdlib.newTestAccounts(3, startingbalance);

  //Get the contract information
  const ctcWho = (whoi) =>
  accounts[whoi].contract(backend, ctcOrganizer.getInfo());

  //Perform rsvp
  const rsvp = async (whoi, numberOfTicket) => {
    const who = accounts[whoi];
    const ctc = ctcWho(whoi);
    console.log('RSVP of', stdlib.formatAddress(who));
    await ctc.apis.RSVPier.isRSVP(); 
    await ctc.api.RSVPier.buyTicket(numberOfTicket )
  };

  // Perform checkin by Organizer
  const do_checkin = async (ctc, whoi) => {
    const who = accounts[whoi];
    console.log('Check in of', stdlib.formatAddress(who));
    await ctc.apis.CHK.isCheckin(who);
  };

  const checkin = (whoi) => do_checkin(ctcOrganizer, whoi);
  // const bad_checkin = (whoi) => do_checkin(ctcWho(whoi), whoi);

  // Check timeisup and close
  const isTime = async () => {
    console.log('Time is up');
    await ctcOrganizer.apis.Checkin.isTime();
  };
  
  // test rsvp with the testaccounts
  await rsvp(0, 2);
  await rsvp(1, 3);
  await rsvp(2, 3);
  await checkin(0);
      
  console.log(`Let's wait for the deadline`);
  await stdlib.wait(deadline);
  
  await isTime();
  
  // loop through the accounts adress and get the balance of the account
  for ( const who of [ accOrganizer, ...accounts ]) {
    console.warn(stdlib.formatAddress(who), 'has',
      stdlib.formatCurrency(await stdlib.balanceOf(who)));
  }
