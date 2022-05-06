import React, {useState} from 'react'
import {Row,  Col, Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import { useEffect } from 'react';
const stdlib = loadStdlib('ALGO');

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
  },
  modal: {
    '@media (max-width: 575px)': {
      width: '90%',
      margin: '10px',
    }
  }
})

export default function RSVPModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [numTicket, setNumTicket] = useState(0)
  const [eventId, setEventId] = useState("");
  const [fee, setFee] = useState(0)
  const [total, setTotal] = useState(0)

  const [tokenID, SetTokenID] = useState(0)


  const buyTicket = async () => {
    const acc = await stdlib.getDefaultAccount();
    console.log(acc)
    await acc.tokenAccept(props.tokenId);
    await acc.tokenAccepted
    await stdlib.transfer(props.creatorAccount, acc, numTicket, props.tokenId)
  }
  useEffect(() =>  {
    setTotal(props.fee * numTicket)

  }, [])

  return(
    <div >
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className={css(styles.modal)}>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder={props.tokenId} autoFocus
              value={props.tokenId} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Number of Tickets" autoFocus
                value={total} onChange={(e) => setNumTicket(e.target.value)}/>
            </Form.Group>
            <div className={css(styles.total)}>
              <span>Total</span>
              <span>{total} Algo</span>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={buyTicket}>
            RSVP
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}