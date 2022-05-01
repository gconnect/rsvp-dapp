import React, {useState} from 'react'
import {Row,  Col, Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

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

    // const titleHandler = (e) =>{
    //   setTitle(e.target.value)
    //   console.log(title)
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
              autoFocus value={image} onChange={(e) => setImage(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Venue" 
              autoFocus value={venue} onChange={(e) => setVenue(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="datetime-local" placeholder="Event date and time"
               autoFocus value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Available Tickets Supply "
               autoFocus value={totalTickets} onChange={(e) => setTotalTicket(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control placeholder="Event description not more than 128 characters" 
              as="textarea" rows={3}  value={description} onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={handleClose}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}