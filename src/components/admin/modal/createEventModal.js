import React, {useState} from 'react'
import { Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { createTicketEvent } from '../../../api/createEvent';
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet', WalletConnect }));

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


  const [title, setTitle] = useState("");
  const [fee, setFee] = useState(0);
  const [image, setImage] = useState("");
  const [venue, setVenue] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [totalTickets, setTotalTicket] = useState(0);
  const [tokenName, setToken] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")

  const pinFileToIPFS = async () => {
      await createTicketEvent(image,title, fee, venue, dateTime, description,totalTickets,tokenName)
  }

  
    const fileHandler = (event) =>{
      setImage(event.target.files[0])
      console.log(image)
    }
   
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