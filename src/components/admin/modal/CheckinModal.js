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

export default function CheckinModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [eventId, setEventId] = useState("");
  const [address, setAddress] = useState("");

  return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className={css(styles.modal)}>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>Checkin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Event Id" autoFocus
              value={eventId} onChange={(e) => setEventId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Wallet Address" autoFocus
              value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={handleClose}>
            Attend Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}