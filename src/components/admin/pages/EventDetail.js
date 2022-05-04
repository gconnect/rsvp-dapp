import { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Button, Form } from 'react-bootstrap'
import image from '../../../images/background.png'
import AttendeeTable from '../AttendeeTable'
import Admin from '../../../components/admin/pages/admin'

const styles = StyleSheet.create({
eventImage: {
  borderRadius: '50%',
},
eventContainer: {
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '24px',
  padding: '24px',
  '@media (max-width: 575px)': {
    fontSize: '12px',
    margin: '5px'
  }
},
title: {
  '@media (max-width: 575px)': {
    fontSize: '14px',
  }
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
  marginBottom: '10px',
  '@media (max-width: 575px)': {
    // width: '100%',
  }
},
downloadBtn: {
  backgroundColor: 'white',
  color: '#A32896',
  fontWeight: 'bold',
  borderColor: '#A32896',
  marginRight: '5px',
  marginLeft: '5px'
},
delete: {
  backgroundColor: 'orange',
  color: 'white',
  fontWeight: 'bold',
  borderColor: 'orange',
  marginRight: '5px',
  marginLeft: '5px',
},
details: {
  display: 'flex',
  justifyContent: 'space-between'
}
})

export default function EventDetail() {
  const [modalShow, setModalShow] = useState(false);

  return(
    <Admin>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.eventContainer)}>
          <div>
            <img className={css(styles.eventImage)} src={image} alt='event' height='100px' width='100px' />
          </div>
          <div className={css(styles.eventDetails)}>
            <h4 className={css(styles.title)}>Blockchain Conference</h4>
            <p>17 Nov, 2021 10:00 AM</p>
            <div className={css(styles.details)}>
              <div>
                <label className={css(styles.labelText)}>Attendees: <b>11</b></label>
                <label className={css(styles.labelText)}>Checkins: <b>8</b></label>
              </div>
              <Button className={css(styles.delete)}>Delete</Button>
            </div>   
          </div>
        </div>
        <div className={css(styles.formContainer)}>
          <Form.Control type="text" placeholder="search" />
          <Button className={css(styles.downloadBtn)}>PDF</Button>
          <Button className={css(styles.downloadBtn)}>CSV</Button>
        </div>
        <AttendeeTable/>
      </div>
    </Admin>
  )
}