import {Row, Col} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { EventItems } from '../admin/data/eventItems'
import EventCard from '../admin/EventCard'

const styles = StyleSheet.create({
  searchInput: {
    width: '20%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center'
  },
  eventDetails: {
    textDecoration: 'none',
    color: 'black'
  }
})
export default function EventBanner() {

  return(
    <div>
        {EventItems.map((item) =>
          <a className={css(styles.eventDetails)} href='EventDetail'>
            <EventCard />
          </a>
        )}       
    </div>
  )
}