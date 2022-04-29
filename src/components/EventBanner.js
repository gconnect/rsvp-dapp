import {Row,  Col, Card} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import {EventItems} from '../data/eventItems'
import EventCard from './eventCard'

const styles = StyleSheet.create({
  upcoming: {
    marginLeft: '24px',
  },
  event: {
    color: '#A32896',
  },
  searchInput: {
    width: '30%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center',
  },
  events: {
    margin: '15px'
  }
})

export default function EventBanner() {
  return(
    <div>
      <input type='text' className={css(styles.searchInput)} placeholder='Search events'/>
      <h3 className={css(styles.upcoming)}>Upcoming <span className={css(styles.event)}>Events</span></h3>
      <Row className="justify-content-md-evenly">
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