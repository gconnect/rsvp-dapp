import {Row, Col, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import logo from '../images/logo.png'

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
    margin: '20px'
  },
  menu: {
    margin: '20px'
  },
  connect: {
    backgroundColor: '#A32896',
    borderColor: 'white'
  }
  
})
export default function Header() {

  return(
    <div className={css(styles.wrapper)}>     
        <div className={css(styles.menu)}>
          <img src={logo} alt='logo' height='48px' width='48px'/>
        </div>
        <div className={css(styles.menu)}>
          <ul className={css(styles.menuItems)}>
            <li className={css(styles.menuItems)} >Events</li>
            <li className={css(styles.menuItems)}>Checkin</li>
            <li className={css(styles.menuItems)}>Organize</li>
            <li className={css(styles.menuItems)}><Button className={css(styles.connect)}>Connect Wallet</Button></li>
          </ul>
        </div>
    </div>
  )
}