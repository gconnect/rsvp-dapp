import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
const connect = stdlib.connector;

const startingBalance = stdlib.parseCurrency(100);
const creatorAccount = await stdlib.newTestAccount(startingBalance)
const organizerAccount = await stdlib.newTestAccount(startingBalance)
const EVT = await stdlib.launchToken(creatorAccount, "EventTicket", "ET");

const ctcCreator = creatorAccount.contract(backend)
const ctcOrganizer = organizerAccount.contract(backend)
console.log(`contract ${JSON.stringify(ctcCreator.getInfo())} `)


// try{
//   await ctcCreator.p.TMP({
//     takePlatformFee: stdlib.parseCurrency(25),
//     ready: () => {
//       console.log("contract is ready");
//     }
//   })
// }catch(err){
//   console.log(err)
// }

try{
  await ctcOrganizer.p.Organizer({
    ticket: EVT.id,
    ticketFee: stdlib.parseCurrency(5),
    ticketSold: () => {
      const x = 10
      return x;
    },
    deadline: 50,
    payPlatformFee: stdlib.parseCurrency(5),
    ready: () => {
      console.log('contract is ready')
    },
  })
}catch(err){
  console.log(err)
}

// await Promise.all([
//   backend.Organizer(organizerAccount, {
//     ticket: EVT.id,
//     ticketFee: stdlib.parseCurrency(5),
//     // ticketSold: () => {
//     //   return 10
//     // },
//     deadline: 50,
//     payPlatformFee: stdlib.parseCurrency(5),
//     ready: () => {
//       console.log('contract is ready')
//     },
//   }),

// ]);
