import React, {useState} from 'react'
import { Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import axios  from 'axios';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { createTicketEvent } from '../../../api/createEvent';
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet', WalletConnect }));
const FormData = require('form-data');

const styles = StyleSheet.create({
  title: {
    color: '#A32896'
  },
  createBtn: {
    backgroundColor: '#A32896',
    color: 'white',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px'
  },
  modal: {
    '@media (max-width: 575px)': {
      width: '90%',
      margin: '10px',
    }
  }

})

export default function CreateEventModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [fee, setFee] = useState(0);
  const [image, setImage] = useState("");
  const [venue, setVenue] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [totalTickets, setTotalTicket] = useState(0);

  const [tokenName, setToken] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [metahash, setMetaHash] = useState("")

  const pinFileToIPFS = async () => {
    const postEvent = await createTicketEvent(image,title, fee, venue, dateTime,
      description, totalTickets, tokenName, tokenSymbol, metahash)
      console.log(postEvent)
  }
  
  const  microalgosToAlgos = (microalgos ) => {
    const INVALID_MICROALGOS_ERROR_MSG =
    'Microalgos should be positive and less than 2^53 - 1.';

    if (microalgos < 0 || !Number.isSafeInteger(microalgos)) {
        throw new Error(INVALID_MICROALGOS_ERROR_MSG);
    }
  }
    const fileHandler = (event) =>{
      setImage(event.target.files[0])
      console.log(image)
    }

    const createToken = async ()=>{
      const acc = await stdlib.getDefaultAccount();
      const token = await stdlib.launchToken(acc, "MyToken2", "MT2", {supply: 10, decimals: 0, metadataHash: `${metahash}`});
      const tokenId = parseInt(token._hex, 16);
      console.log(` Token Id: ${tokenId}`)
    }
    // const createToken = async ()=>{
    //   const acc = await stdlib.getDefaultAccount();
    //   const token = await stdlib.launchToken(acc, tokenName, tokenSymbol, {supply: microalgosToAlgos(totalTickets), metadataHash: `${metahash}`});
    //   console.log(token.id)
    // }

  //   const pinFileToIPFS = async () => {
  //     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  
  //     //we gather a local file for this example, but any valid readStream source will work here.
  //     let data = new FormData();
  //     data.append('file', image, image.name);
  //     //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  //     //metadata is optional
  //     const acc = await stdlib.getDefaultAccount();
  //     const token = await stdlib.launchToken(acc, tokenName, tokenSymbol, {supply: totalTickets, metadataHash: `${metahash}`});
  //     console.log(token.id)
  //     console.log(metahash);

  //     const metadata = JSON.stringify({
  //         name: 'Ticketing',
  //         keyvalues: {
  //           title: title,
  //           fee: fee,
  //           venue: venue,
  //           dateTime: dateTime,
  //           description: description,
  //           totalTickets: totalTickets,
  //           token: token.id,
  //           tokenName: tokenName,
  //           tokenSymbol: tokenSymbol
  //         }
  //     });
  //     data.append('pinataMetadata', metadata);
      
  //     //pinataOptions are optional
  //     const pinataOptions = JSON.stringify({
  //         cidVersion: 0,
  //     });
  //     data.append('pinataOptions', pinataOptions);
      
  //     return axios
  //         .post(url, data, {
  //             maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
  //             // metadata,
  //             headers: {
  //                 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  //                 pinata_api_key: 'e0dc6bb0e514ac15eefd',
  //                 pinata_secret_api_key: '37286b1cadff4ee4cc7d177a69b612c0c66905cf1456a688411102ebc9196f1c'
  //             }
  //         })
  //         .then(function (response) {
  //             //handle response here
  //             setMetaHas(response.data.ipfsHash)
  //             console.log(response.data.ipfsHash)
  //             handleClose()
  //         })
  //         .catch(function (error) {
  //             //handle error here
  //             console.log(error)
  //         });
  //     }  
  return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className={css(styles.modal)}>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Event title" 
              autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Fee" 
              autoFocus value={fee} onChange={(e) => setFee(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="file" placeholder="Image url" 
              autoFocus   onChange={fileHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Venue" 
              autoFocus value={venue} onChange={(e) => setVenue(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="datetime-local" placeholder="Event date and time"
               autoFocus value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control placeholder="Event description not more than 128 characters" 
              as="textarea" rows={3}  value={description} onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Add Ticket</Form.Label>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Token name "
               autoFocus value={tokenName} onChange={(e) => setToken(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Token Symbol "
               autoFocus value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Available Tickets Supply "
               autoFocus value={totalTickets} onChange={(e) => setTotalTicket(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={pinFileToIPFS}>
            Create Event
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={createToken}>
            Create Token
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}