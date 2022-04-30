import {Row,  Col, Card} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import {EventItems} from '../data/eventItems'
import EventCard from './eventCard'

const styles = StyleSheet.create({
  upcoming: {
    margin: '20px 7%',
  },
  event: {
    color: '#A32896',
  },
  searchInput: {
    width: '70%',
    padding: '4px',
    margin: '20px 7%',
    alignItems: 'center',
    '@media (max-width: 575px)': {
      width: '90%',
      margin: '20px'
    }
  },
  events: {
    margin: '15px 0',
    '@media (max-width: 575px)': {
      margin: '10px 60px',
      alignContent: 'center'
    }
  }
})

export default function EventBanner() {
  return(
    <div id='events'>
      <input type='text' className={css(styles.searchInput)} placeholder='Search events'/>
      <h3 className={css(styles.upcoming)}>Upcoming <span className={css(styles.event)}>Events</span></h3>
      <Row className="justify-content-md-center" md='auto'>
        {EventItems.map((event) =>
          <Col className={css(styles.events)}>
            <EventCard 
            title={event.title} 
            dateTime={event.dateTime} 
            image={event.image} 
            venue={event.venue}
            fee={event.fee}
             />
          </Col>
        )}
      </Row>
    </div>
  )
}