import { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Container,  Button } from 'react-bootstrap'
import Header from '../header'
import CreateEventModal from '../../admin/modal/createEventModal'


const styles = StyleSheet.create({
wrapper: {
  backgroundColor: '#F4F4F4',
  width: '100%',
},
container:{
  backgroundColor: 'white',
  marginTop: '24px'
},
createBtn: {
  backgroundColor: 'white',
  color: '#A32896',
  fontWeight: 'bold',
  borderColor: '#A32896',
  marginRight: '20px'
},
createContainer: {
  display: 'flex',
  justifyContent: 'flex-end'
}
})

export default function Admin(props) {
  const [modalShow, setModalShow] = useState(false);

  return(
    <div className={css(styles.wrapper)}>
      <Header/>
      <Container>
        <div className={css(styles.createContainer)}>
          <Button className={css(styles.createBtn)} onClick= {() => setModalShow(!modalShow)}>Create Event</Button>
          <CreateEventModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </Container> 
      <Container className={css(styles.container)}>
        {props.children}
      </Container>
    </div>
  )
}