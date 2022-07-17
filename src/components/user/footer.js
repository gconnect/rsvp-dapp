import { Row,  Col } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: '48px',
    backgroundColor: '#A32896',
    color: 'white',
    marginTop: '24px'
  }
  
})

export default function Footer() {
  return(
    <div className={css(styles.wrapper)}>
      <Row>
        <Col><p>TETicketing</p></Col>
        <Col><p>Discord</p></Col>
      </Row>
      <Row>
        <Col><p>Copyright (c) 2022. All rights reserved</p></Col>
        <Col><p>Twitter</p></Col>
      </Row>
    </div>
  )
}