import { useState } from 'react'
import {Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import coverImage from '../images/background.png'
import Header from './header'
import CheckinModal from './CheckinModal'
import RSVPModal from './rsvpModal'
import CreateEventModal from './createEventModal'

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
    color: 'white',
    '@media (max-width: 575px)': {
      fontSize: '64px',
    }
  },
  description: {
    fontSize: '24px',
    color: 'white',
    marginLeft: '15px',
    '@media (max-width: 575px)': {
      fontSize: '16px',
    }
  },
  btnContainer: {
    margin: '15px'
  },
  rsvpBtn: {
    width: '200px',
    backgroundColor: 'white',
    color: '#A32896',
    padding: '8px',
    borderColor: 'white',
    fontWeight: 'bold',
    '@media (max-width: 575px)': {
      width: '150px',
    }
  },
  checkinBtn: {
    width: '200px',
    backgroundColor: '#A32896',
    color: 'white',
    padding: '8px',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px',
    '@media (max-width: 575px)': {
      width: '150px',
    }
  },
  organizeBtn: {
    display: 'none',
    '@media (max-width: 575px)': {
      width: '100%',
      display: 'block',
      backgroundColor: '#A32896',
      color: 'white',
      padding: '8px',
      fontWeight: 'bold',
      borderColor: '#A32896',
      margin: 'auto',
    }
  }
})

export default function Content() {
  const [checkin, setCheckin] = useState(false);
  const [rsvp, setRSVP] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return(
    <div className={css(styles.wrapper)}>
      <Header/>
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>Tech Event <br/>Ticketing</h1>
        <p className={css(styles.description)}>Decentralized ticketing app built with Reach <br/> deployed on Algorand</p>
        <div className={css(styles.btnContainer)}>
          <Button className={css(styles.rsvpBtn)} onClick= {() => setRSVP(!rsvp)}>RSVP</Button>
          <Button className={css(styles.checkinBtn)} onClick= {() => setCheckin(!checkin)}>CHECKIN</Button>
          <Button className={css(styles.organizeBtn)} onClick= {() => setModalShow(!modalShow)}>ORGANIZE</Button>
          <CreateEventModal show={modalShow} onHide={() => setModalShow(false)}/>
          <CheckinModal show={checkin} onHide={() => setCheckin(false)}/>
          <RSVPModal show={rsvp} onHide={() => setRSVP(false)}/>
        </div>
      </div>   
    </div>
  )
}