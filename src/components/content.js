import {Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import coverImage from '../images/background.png'
import Header from './header'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${coverImage})`
  },
  container: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    height: '100vh'
  },
  title: {
    fontSize: '96px',
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: '24px',
    color: 'white',
    marginLeft: '15px'
  },
  btnContainer: {
    margin: '15px'
  },
  rsvpBtn: {
    width: '100px',
    backgroundColor: 'white',
    color: '#A32896',
    padding: '16px',
    borderColor: 'white',
    fontWeight: 'bold',
  },
  checkinBtn: {
    backgroundColor: '#A32896',
    color: 'white',
    padding: '16px',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px'
  }
})

export default function Content() {
  return(
    <div className={css(styles.wrapper)}>
      <Header/>
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>Tech Event <br/>Ticketing</h1>
        <p className={css(styles.description)}>Decentralized ticketing app built with Reach <br/> deployed on Algorand</p>
        <div className={css(styles.btnContainer)}>
          <Button className={css(styles.rsvpBtn)}>RSVP</Button>
          <Button className={css(styles.checkinBtn)}>CHECKIN</Button>
        </div>
      </div>   
    </div>
  )
}