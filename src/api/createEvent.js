import { loadStdlib } from '@reach-sh/stdlib';
import axios  from 'axios';
const stdlib = loadStdlib('ALGO');
const FormData = require('form-data');


export const createTicketEvent = async (image, title, fee, venue, dateTime, description,totalTickets, tokenName, tokenSymbol, metahash ) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  //we gather a local file for this example, but any valid readStream source will work here.
  let data = new FormData();
  data.append('file', image, image.name);
  //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  //metadata is optional
  const acc = await stdlib.getDefaultAccount();
  const token = await stdlib.launchToken(acc, tokenName, tokenSymbol, { supply: totalTickets, decimals: 0, metadataHash: `${metahash}`});
  const tokenId = parseInt(token._hex, 16);
  console.log(` Token Id: ${tokenId}`)
  console.log(`token ${token._hex.toString()}`)

  const metadata = JSON.stringify({
      name: 'Ticketing',
      keyvalues: {
        title: title,
        fee: fee,
        venue: venue,
        dateTime: dateTime,
        description: description,
        totalTickets: totalTickets,
        token: tokenId,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol
      }
  });
  data.append('pinataMetadata', metadata);
  
  //pinataOptions are optional
  const pinataOptions = JSON.stringify({
      cidVersion: 0,
  });
  data.append('pinataOptions', pinataOptions);
  
  return axios
      .post(url, data, {
          maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
          // metadata,
          headers: {
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
              pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
              pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY
          }
      })
      .then(function (response) {
          //handle response here
          console.log(response.data.ipfsHash)
      })
      .catch(function (error) {
          //handle error here
          console.log(error)
      });
  } 
