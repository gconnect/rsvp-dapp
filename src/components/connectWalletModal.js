import React, {useState} from 'react'
import {Row,  Col, Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  title: {
    color: '#A32896'
  },
  connectBtn: {
    backgroundColor: 'white',
    width: '90%',
    color: '#A32896',
    padding: '16px',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px 20px'
  }
  
})

export default function ConnectWallet(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button className={css(styles.connectBtn)}>MyAlgo Wallet</Button>
          <Button className={css(styles.connectBtn)}>Pera Wallet </Button>
          <Button className={css(styles.connectBtn)}>MetaMask</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}