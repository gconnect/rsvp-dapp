import {Row, Col} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import EventCard from './eventCard'

const styles = StyleSheet.create({
  searchInput: {
    width: '20%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center'
  }
})
export default function Events() {
  return(
    <div>
     <input  className={css(styles.searchInput)} type='text' placeholder='search for events'/>
     <EventCard/>
    </div>
  )
}