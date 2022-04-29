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
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px'
  }
  
})

export default function RSVPModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [eventId, setEventId] = useState("");
  const [ticket, setTicket] = useState(0);
  const [fee, setFee] = useState(0)
  const [total, setTotal] = useState(0)

  return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Event Id" autoFocus
              value={eventId} onChange={(e) => setEventId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Number of Tickets" autoFocus
                value={ticket} onChange={(e) => setTicket(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Fee" autoFocus 
              value={fee} onChange={(e) => setFee(e.target.value)} />
            </Form.Group>
            <div className={css(styles.total)}>
              <span>Total</span>
              <span>5 Algo</span>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={handleClose}>
            RSVP
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}