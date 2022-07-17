import { Tabs, Tab } from 'react-bootstrap'
import EventBanner from '../EventBanner'
import Admin from '../../../components/admin/pages/admin'

export default function Dashboard() {
  return(
    <Admin>
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
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