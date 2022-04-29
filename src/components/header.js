import React, {useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import logo from '../images/logo.png'
import CreateEventModal from './createEventModal'
import CheckinModal from './CheckinModal'
import ConnectWallet from './connectWalletModal'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItems: {
    display: 'inline',
    textDecoration: 'none',
    color: 'white',
    margin: '20px',
    cursor: 'pointer'
  },
  menu: {
    margin: '20px'
  },
  connect: {
    backgroundColor: '#A32896',
    borderColor: 'white'
  },
  event: {
    textDecoration: 'none',
    color: 'white'
  },
})
export default function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [checkin, setCheckin] = useState(false);
  const [wallet, setWallet] = useState(false);

  return(
    <div className={css(styles.wrapper)}>     
      <div className={css(styles.menu)}>
        <img src={logo} alt='logo' height='48px' width='48px'/>
      </div>
      <div className={css(styles.menu)}>
        <ul className={css(styles.menuItems)}>
          <li className={css(styles.menuItems)}><a className={css(styles.event)} href='#events'>Events</a></li>
          <li className={css(styles.menuItems)} onClick= {() => setCheckin(!checkin)}>Checkin</li>
          <li className={css(styles.menuItems)} onClick= {() => setModalShow(!modalShow)}>Organize</li>
          <li className={css(styles.menuItems)}><Button className={css(styles.connect)} onClick= {() => setWallet(!wallet)}>Connect Wallet</Button></li>
          <CreateEventModal show={modalShow} onHide={() => setModalShow(false)}/>
          <CheckinModal show={checkin} onHide={() => setCheckin(false)}/>
          <ConnectWallet show={wallet} onHide={() => setWallet(false)}/>
        </ul>
      </div>
    </div>
  )
}