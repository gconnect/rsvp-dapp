import { Row,  Col, Form } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import EventCard from './eventCard'
import { EventList } from '../../api/EventList'
import { useEffect } from 'react'
import { useState } from 'react'
import loadingGif from '../../images/loading.gif'

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
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default function EventBanner() {
 const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const events = async () => {
    setLoading(true)
    const eventArray =  await EventList("Ticketing")
    setList(eventArray)
    setLoading(false)
    console.log(eventArray)
   }
 
   useEffect(() => {
     events()
   }, [])
   
    return(
    <div id='events'>
        {/* <input type='text' className={css(styles.searchInput)} placeholder='Search events'/> */}
      <Form.Control className={css(styles.searchInput)} type="text" placeholder="search events" />
      <h3 className={css(styles.upcoming)}>Popular <span className={css(styles.event)}>Events</span></h3>
      {loading ? <img className={css(styles.loading)} src={loadingGif} height="300px" width="300px"/> : 

      <Row className={css(styles.upcoming)}>
        { list.map((event) =>
          <Col className={css(styles.events)} key={event.id}>
            <EventCard 
              title={event.metadata.keyvalues['title']} 
              dateTime={event['date_pinned']} 
              image={`https://ipfs.io/ipfs/${event.ipfs_pin_hash}`}
              venue={event.metadata.keyvalues['venue']} 
              fee={event.metadata.keyvalues['fee']} 
              tokenId={event.metadata.keyvalues['token']}
              creatorAccount={event.metadata.keyvalues['creatorAccount']}
             />
          </Col>
        )}
      </Row>
      }
    </div>
  )
}