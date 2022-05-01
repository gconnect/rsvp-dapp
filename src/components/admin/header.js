import React, {useState} from 'react'
import { Container, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import ConnectWallet from '../connectWalletModal'

const styles = StyleSheet.create({
  wrapper: {
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
  menu: {
    margin: '20px',
  },
  connect: {
    backgroundColor: '#A32896',
    borderColor: 'white',
  },
  logo: {
    margin: '16px',
  },
  title: {
    marginTop: '36px',
    color: '#A32896',
    fontSize: '24px',
    fontWeight: 'bold'
  }
})
export default function Header() {
  const [wallet, setWallet] = useState(false);

  return(
    <Container>
      <div className={css(styles.wrapper)}>     
      <div>
        <Link to='/'>
          <img className={css(styles.logo)} src={logo} alt='logo' height='36px' width='36px'/>
        </Link>
        <span className={css(styles.title)}>Admin Dashboard</span>
      </div>

      <div>
      <div className={css(styles.menu)}>
        <Button className={css(styles.connect)} onClick= {() => setWallet(!wallet)}>Connect Wallet</Button>
        <ConnectWallet show={wallet} onHide={() => setWallet(false)}/>
      </div>
      </div>
    </div>
    </Container>
  )
}