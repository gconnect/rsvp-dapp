import { useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { EventItems } from '../admin/data/eventItems'
import EventCard from '../admin/EventCard'
import Admin from './pages/admin'
import Dashboard from './pages/dashboard'
import EventDetail from './pages/EventDetail'

const styles = StyleSheet.create({
  searchInput: {
    width: '20%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center'
  },
  eventDetails: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer'
  }
})
export default function EventBanner() {

  return(
    <div>
        {EventItems.map((item) =>
          <a className={css(styles.eventDetails)} href='/EventDetail'>
            <EventCard />
          </a>
        )} 
    </div>
  )
}