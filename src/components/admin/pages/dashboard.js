import { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Tabs, Tab } from 'react-bootstrap'
import EventBanner from '../EventBanner'
import Admin from './admin'


const styles = StyleSheet.create({
wrapper: {

},

})

export default function Dashboard() {
  return(
    <Admin>
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Live">
            <EventBanner/>
          </Tab>
          <Tab eventKey="profile" title="Completed">
            <EventBanner/>
          </Tab>
        </Tabs>
      </div>
    </Admin>
  )
}