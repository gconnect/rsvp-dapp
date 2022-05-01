import {Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import image from '../../images/background.png'

const styles = StyleSheet.create({
  eventImage: {
    borderRadius: '50%',
    '@media (max-width: 575px)': {
      height: '70px',
      width: '70px'
    }
  },
  eventContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '24px',
    '@media (max-width: 575px)': {
      fontSize: '16px'
    }
  },
  eventDetails: {
    marginLeft: '24px'
  },
  title: {
    '@media (max-width: 575px)': {
      fontSize: '16px',
      fontWeight: 'bold'
    }
  },
  labelText: {
    margin: '8px'
  },
  checkin: {
    backgroundColor: '#A32896',
    color: 'white',
    fontWeight: 'bold',
    borderColor: '#A32896',
    marginRight: '24px'

  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    '@media (max-width: 575px)': {
      fontSize: '16px',
    }
  },
})
export default function EventCard() {
  return(
    <div>
      <div className={css(styles.eventContainer)}>
          <div>
            <img className={css(styles.eventImage)} src={image} alt='event' height='100px' width='100px' />
          </div>
          <div className={css(styles.eventDetails)}>
            <h4 className={css(styles.title)}>Blockchain Conference</h4>
            <p>17 Nov, 2021 10:00 AM</p>
              <label className={css(styles.labelText)}>Attendees: <b>11</b></label>
              <label className={css(styles.labelText)}>Checkins: <b>8</b></label>
        </div>
      </div>  
      <div className={css(styles.buttonContainer)}>
        <Button className={css(styles.checkin)}>Checkin</Button>
      </div>
      <hr className={css(styles.line)}/>
    </div>    
  )
}