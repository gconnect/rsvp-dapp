import {Row, Col} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import image from '../../images/background.png'

const styles = StyleSheet.create({
  eventImage: {
    borderRadius: '50%',
  },
  eventContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '24px'
  },
  eventDetails: {
    marginLeft: '24px'
  },
  line: {
  },
  labelText: {
    margin: '8px'
  }
})
export default function EventCard() {
  return(
    <div>
      <div className={css(styles.eventContainer)}>
        <div>
          <img className={css(styles.eventImage)} src={image} alt='event' height='100px' width='100px' />
        </div>
        <div className={css(styles.eventDetails)}>
          <h4>Blockchain Conference</h4>
          <p>17 Nov, 2021 10:00 AM</p>
          <label className={css(styles.labelText)}>Attendees: <b>11</b></label>
          <label className={css(styles.labelText)}>Checkins: <b>8</b></label>
        </div>
     </div>
     <hr className={css(styles.line)}/>
    </div>
    
  )
}