import { useState } from 'react'
import {Table, Col, Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { AttendeeDetailItem } from './data/attendeeDetailItem'
import CheckinModal from '../admin/modal/CheckinModal'
const styles = StyleSheet.create({

  table: {
    '@media (max-width: 575px)': {
      fontSize: '12px'
    }
  },
  
})

export default function AttendeeTable() {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false)

  const handleCheckBox = (checked) => checked ? null : <CheckinModal show={show} onHide={() => setShow(false)}/>

  return(
    <div>
      <Table striped bordered hover className={css(styles.table)}>
        <thead>
          <tr>
            <th>Address</th>
            <th>Ticket Title</th>
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
             <td><input type='checkbox' onChange={(e) => { setChecked(e.target.value)}} onClick={() => {setShow(true)}}  /></td>
              { !checked ?? <CheckinModal show={show} onHide={() => setShow(false)}/> }

             
           </tr>
          )}
        </tbody>
        </Table>      
    </div>
  )
}