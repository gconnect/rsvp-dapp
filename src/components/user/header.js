import React, {useState} from 'react'
import UAuth from '@uauth/js'
import { Button } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import ConnectWallet from '../connectWalletModal'
import CreateEventModal from '../admin/modal/createEventModal'

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
    cursor: 'pointer',
    '@media (max-width: 575px)': {
      display: 'none'
    }
  },
  btnItems: {
    display: 'inline',
    textDecoration: 'none',
    color: 'white',
    margin: '20px',
    cursor: 'pointer',
   
  },
  menu: {
    margin: '20px',
  },
  connect: {
    backgroundColor: '#A32896',
    borderColor: 'white',
  },
  event: {
    textDecoration: 'none',
    color: 'white'
  },
  logo: {
    margin: '16px',
  },
  adminItem: {
    textDecoration: 'none',
    color: 'white'
  }
})
export default function Header() {
  const [wallet, setWallet] = useState(false);
  
  const uauth = new UAuth({
    // clientID: 'uauth_example_spa_id',
    clientID: 'b9880354-ed6a-438c-b7d3-8b6b2a489db8',
    redirectUri: 'https://rsvp-dapp.vercel.app/',
  })

const login = async () => {
  try {
    const authorization = await uauth.loginWithPopup() 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}

  return(
    <div className={css(styles.wrapper)}>     
      <div>
        <img className={css(styles.logo)} src={logo} alt='logo' height='48px' width='48px'/>
      </div>
      <div>
      <div className={css(styles.menu)}>
        <ul >
          <li className={css(styles.menuItems)}><a className={css(styles.event)} href='#events'>Events</a></li>
          <li className={css(styles.menuItems)}><Link className={css(styles.adminItem)} to='/admin'>Admin</Link></li>
          <li className={css(styles.menuItems)} onClick={() => {login()}}>Login</li>
          <li className={css(styles.btnItems)}><Button className={css(styles.connect)} onClick= {() => setWallet(!wallet)}>Connect Wallet</Button></li>
          <ConnectWallet show={wallet} onHide={() => setWallet(false)}/>
        </ul>
      </div>
      </div>
    </div>
  )
}