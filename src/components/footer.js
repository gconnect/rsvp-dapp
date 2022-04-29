import {Row,  Col, Card} from 'react-bootstrap'
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
        <Col>TETicketing</Col>
        <Col>Discord</Col>
      </Row>
      <Row>
        <Col>Copyright (c) 20222. All rights reserved</Col>
        <Col>Twitter</Col>
      </Row>
    </div>
  )
}