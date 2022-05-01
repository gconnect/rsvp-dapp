import {Row,  Col, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import {EventItems} from '../user/data/eventItems'
import EventCard from './eventCard'

const styles = StyleSheet.create({
  upcoming: {
    margin: '20px 50px',
  },
  event: {
    color: '#A32896',
  },
  searchInput: {
    width: '80%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center',
    '@media (max-width: 575px)': {
      width: '90%',
      margin: '20px'
    }
  },
  events: {
    margin: '15px 0',
    '@media (max-width: 575px)': {
    }
  },
  eventRow: {
    marginRight: '0'
  }
})

export default function EventBanner() {
  return(
    <div id='events'>
      {/* <input type='text' className={css(styles.searchInput)} placeholder='Search events'/> */}
      <Form.Control className={css(styles.searchInput)} type="text" placeholder="search events" />

      <h3 className={css(styles.upcoming)}>Upcoming <span className={css(styles.event)}>Events</span></h3>
      <Row className={css(styles.upcoming)} >
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