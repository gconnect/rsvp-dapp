import { useState } from 'react'
import {Row, Container, Col, Card, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import icon from '../images/location.png'
import RSVPModal from './rsvpModal'

const styles = StyleSheet.create({
  upcoming: {
    marginLeft: '24px',
  },
  event: {
    color: '#A32896',
  },
  searchInput: {
    width: '20%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center'
  },
  tickerBtn: {
    backgroundColor: '#A32896',
    borderColor: '#A32896',
    width: '100%'
  },
  location: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '8px'
  },
  venue: {
    color: '#A32896',
    marginLeft: '8px'
  },
  card: {
    boxShadow: '4px 8px 0 rgba(0,0,0,0.2',
    transition: '0.3s'
  }
})

export default function EventCard(props) {
  const [rsvp, setRSVP] = useState(false);

  return(
      <div>
        <Card style={{ width: '18rem' }} className={css(styles.card)}>
          <Card.Img variant="top" src={ require(`../images/${props.image}`)} />
          <Card.Body>
            <p>{props.dateTime}</p>
            <Card.Title>{props.title}</Card.Title>
            <div className={css(styles.location)}>
              <image src='../images/location.png' alt='location' width= '24px' height= '48px' />
              <span>Venue:</span>
              <span className={css(styles.venue)}>{props.venue}</span>
            </div>
            <Card.Text>
              <p>Fee: <span>{props.fee}</span></p>
            </Card.Text>
            <Button className={css(styles.tickerBtn)} variant="primary" onClick= {() => setRSVP(!rsvp)}>Get Ticket</Button>
            <RSVPModal show={rsvp} onHide={() => setRSVP(false)}/>
          </Card.Body>
        </Card>
      </div>
  )
}