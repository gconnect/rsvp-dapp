import { useState } from 'react'
import {Row, Container, Col, Card, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import icon from '../../images/background.png'
import RSVPModal from './rsvpModal'
import { loadStdlib } from '@reach-sh/stdlib';
import { useEffect } from 'react';
const stdlib = loadStdlib('ALGO');
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
    transition: '0.3s',
  }
})

export default function EventCard(props) {
  const [rsvp, setRSVP] = useState(false);
  const [tickets, setTIckets] = useState(false)

  useState(() => {
    const availableTicket = async () =>{
      // const acc = await stdlib.getDefaultAccount();
      const bal =  await stdlib.balanceOf(props.creatorAccount, props.tokenId)
      const acctBal = bal._hex
      const balance = parseInt(acctBal, 16)
      setTIckets(balance)
      console.log(balance)
    }
    availableTicket()
  }, [])

  //Get the balance of the token
  // const tokenBal = async () => {
  //   const bal = await stdlib.balanceOf(props.creatorAccount,  props.tokenId)
  //   console.log(bal)
  // }
  // tokenBal()
   
  return(
      <div>
        <Card style={{ width: '18rem' }} className={css(styles.card)}>
          <Card.Img variant="top" src={props.image} height= '200px' />
          <Card.Body>
            <p>{props.dateTime}</p>
            <Card.Title>{props.title}</Card.Title>
            <div className={css(styles.location)}>
              {/* <image src='../images/location.png' alt='location' width= '24px' height= '48px' /> */}
              <span>Venue:</span>
              <span className={css(styles.venue)}>{props.venue}</span>
            </div>
            <Card.Text>
              <p>Fee: <span>{props.fee}</span></p>
              <p>Available Ticket: <span>{tickets}</span></p>
            </Card.Text>
            <Button className={css(styles.tickerBtn)} variant="primary" onClick= {() => setRSVP(!rsvp)}>Get Ticket</Button>
            <RSVPModal show={rsvp} onHide={() => setRSVP(false)} tokenId = {props.tokenId} creatorAccount={props.creatorAccount} fee= {props.fee}/>
          </Card.Body>
        </Card>
      </div>
  )
}