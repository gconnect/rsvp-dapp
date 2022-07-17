import { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Button, Form } from 'react-bootstrap'
import AttendeeTable from '../AttendeeTable'
import Admin from '../../../components/admin/pages/admin'
import { removePinFromIPFS } from '../../../api/deletePinData'
import { useParams } from 'react-router-dom'
import { EventList } from '../../../api/EventList'
import { useEffect } from 'react'
import loadingGif from '../../../images/loading.gif'

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
},
loading: {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center'
}
})

export default function EventDetail() {
  const [modalShow, setModalShow] = useState(false);
  const [list, setList] = useState([])
  const [event, setEvent] = useState('')
  const [eventID, setEventID] = useState('')
  const [loading, setLoading] = useState(false)

  const { eventId } = useParams()

  const events = async () => {
    setLoading(true)
    const eventArray =  await EventList("Ticketing")
    setList(eventArray)
    setLoading(false)
      console.log(eventArray)
   }


  useEffect(() => {
    
     events()

     
  setEvent(list.find(item => item.id === eventId))
  }, [list])


  // delete unpin item
  const deletePin = async () =>{
    await removePinFromIPFS(event.ipfs_pin_hash)
}
  return(

    <Admin>
    {event ?
      <div className={css(styles.wrapper)}>
        <div className={css(styles.eventContainer)}>
          <div>
            <img className={css(styles.eventImage)} src={`https://ipfs.io/ipfs/${event.ipfs_pin_hash}`} alt='event' height='100px' width='100px' />
          </div>
          <div className={css(styles.eventDetails)}>
            <h4 className={css(styles.title)}>{event.metadata.keyvalues['title']}</h4>
            <p>{event.metadata.keyvalues['dateTime']}</p>
            <div className={css(styles.details)}>
              <div>
                <label className={css(styles.labelText)}>Attendees: <b>11</b></label>
                <label className={css(styles.labelText)}>Checkins: <b>8</b></label>
              </div>
              <Button className={css(styles.delete)} onClick={() => deletePin()}>Delete</Button>
            </div>   
          </div>
        </div>
        <div className={css(styles.formContainer)}>
          <Form.Control type="text" placeholder="search" />
          <Button className={css(styles.downloadBtn)}>PDF</Button>
          <Button className={css(styles.downloadBtn)}>CSV</Button>
        </div>
        <AttendeeTable/>
      </div> : <img className={css(styles.loading)} src={loadingGif} height="300px" width="300px"/>  }
    </Admin>
  
  )
}