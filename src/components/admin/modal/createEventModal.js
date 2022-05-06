import React, {useState} from 'react'
import { Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import axios  from 'axios';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { createTicketEvent, createToken } from '../../../api/createEvent';
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
  const [tokenId, setTokenId] = useState(0);
  const [tokenName, setToken] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [creatorAddress, setCreatorAddress] = useState("")


function bytesToFloatArray(bytes) {
  return new Float32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength/Float32Array.BYTES_PER_ELEMENT);
}

  const pinFileToIPFS = async () => {
      await createTicketEvent(image,title, fee, venue, dateTime, description,totalTickets,tokenName)

      // const metaHash = localStorage.getItem('ipfsHash')
      // console.log(metaHash)
      // const token = await createToken(tokenName, tokenSymbol, totalTickets, bytesToFloatArray(metaHash))
      // console.log(token.id['_hex'])
  }

  
    const fileHandler = (event) =>{
      setImage(event.target.files[0])
      console.log(image)
    }

    // const createToken = async ()=>{
    //   const acc = await stdlib.getDefaultAccount();
    //   const token = await stdlib.launchToken(acc, "MyToken4", "MT4", {supply: 1, decimals: 0});
    //   await acc.tokenAccept(token.id);

    //   console.log(token.id['_hex'])
    //   const tok = token.id['_hex']
    //   const tokenId = parseInt(tok, 16);
    //   localStorage.setItem('tokenId', tokenId)
    // }
   
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
          {/* <Button className={css(styles.createBtn)} variant="primary" onClick={createToken}>
            Create Token
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}