import { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Container, Tabs, Tab, Button, Form } from 'react-bootstrap'
import Header from '../header'
import CreateEventModal from '../../admin/modal/createEventModal'
import EventBanner from '../EventBanner'
import EventCard from '../EventCard'
import image from '../../../images/background.png'
import AttendeeTable from '../AttendeeTable'

const styles = StyleSheet.create({
eventImage: {
  borderRadius: '50%',
},
eventContainer: {
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '24px',
  padding: '24px'
},
eventDetails: {
  marginLeft: '24px'
},
labelText: {
  margin: '8px'
},
formContainer: {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '10px'
},
downloadBtn: {
  backgroundColor: 'white',
  color: '#A32896',
  fontWeight: 'bold',
  borderColor: '#A32896',
  marginRight: '5px',
  marginLeft: '5px'

},
})

export default function EventDetail() {
  const [modalShow, setModalShow] = useState(false);

  return(
    <div className={css(styles.wrapper)}>
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
      <div className={css(styles.formContainer)}>
        <Form.Control type="text" placeholder="search" />
        <Button className={css(styles.downloadBtn)}>PDF</Button>
        <Button className={css(styles.downloadBtn)}>CSV</Button>
      </div>
      <AttendeeTable/>
    </div>
  )
}