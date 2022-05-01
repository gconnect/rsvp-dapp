
import {Table, Col, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { AttendeeDetailItem } from './data/attendeeDetailItem'
const styles = StyleSheet.create({
  table: {
    maxWidth: '165px',
  },
})
export default function AttendeeTable() {

  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Address</th>
            <th>TicketTitle</th>
            <th>Registration Date</th>
            <th>Fee Paid</th>
            <th>Checkin</th>
          </tr>
        </thead>
        <tbody>
          {AttendeeDetailItem.map((item) =>
             <tr>
             <td>{item.walletAddress.substring(0, 10)}</td>
             <td>{item.ticketTitle}</td>
             <td>{item.registrationDate}</td>
             <td>#50</td>
             <td><Button>Checkin</Button></td>
           </tr>
          )}
        </tbody>
        </Table>      
    </div>
  )
}