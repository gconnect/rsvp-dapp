import { loadStdlib } from '@reach-sh/stdlib';
import axios  from 'axios';
const crypto = require('crypto');
const stdlib = loadStdlib('ALGO');
const FormData = require('form-data');
const fs = require('fs');


export const createTicketEvent = async (image, title, fee, venue, dateTime, description,totalTickets, tokenName, tokenSymbol) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  //we gather a local file for this example, but any valid readStream source will work here.
  let data = new FormData();
  data.append('file', image, image.name);
  //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  //metadata is optional

  const acc = await stdlib.getDefaultAccount();
// Hash metadata
  const fullPath ='../../metadata.json';
  // const metadatafile =  fs.readFileSync((fullPath), "utf8")
  const metadatafile = fetch(fullPath).then(r => r.json()).then(json => {console.log('json decoded:', json)});
  const hash = crypto.createHash('sha256');
  hash.update(metadatafile);
  const metadata1 = new Uint8Array(hash.digest()); 
  console.log(metadata1)

// hash image integrity to be added to the json file
  const hashImage = crypto.createHash('sha256');
  hashImage.update(image);
  const hashImageBase64 = hashImage.digest("base64");
  const imageIntegrity = "sha256-" + hashImageBase64;
  // use this in yout metadata.json file
  console.log("image_integrity : " + imageIntegrity);

  const link = "ipfs://QmbGQyhjy8Boo5gYWcj9EdvFfTf4x4h8DZxMDWTNsfhBxE"
  
  const token = await stdlib.launchToken(acc, tokenName, tokenSymbol, { supply: totalTickets, decimals: 0, metadataHash: metadata1, url: link});
  await acc.tokenAccept(token.id);
  const tok = token.id['_hex']
  const tokenId = parseInt(tok, 16);
  const address = acc.networkAccount.addr
  //get wallet address
  console.log(address)

    //Get account balance
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
        // tokenSymbol: tokenSymbol,
        creatorAccount: address
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
          const ipfsHash = response.data.IpfsHash
          // console.log(response.data.IpfsHash)
          console.log(response.data)
          localStorage.setItem('ipfsHash', ipfsHash)
      })
      .catch(function (error) {
          //handle error here
          console.log(error)
      });
  } 

  export const createToken = async (tokenName, tokenSymbol,totalTickets, hash) => {
    const acc = await stdlib.getDefaultAccount();
    const token = await stdlib.launchToken(acc, tokenName, tokenSymbol, { supply: totalTickets, decimals: 0, metadataHash: hash});
    await acc.tokenAccept(token.id);

    const tok = token.id['_hex']
    const tokenId = parseInt(tok, 16);
    localStorage.setItem('tokenId', tokenId)
    // console.log(token)
    // console.log(token.id['_hex'])

  }