import { StyleSheet, css } from 'aphrodite'
import Content from './content'
import EventBanner from './EventBanner'
import Footer from './footer'

const styles = StyleSheet.create({
wrapper: {
  margin: '0',
  minHeight: '0'
},
})

export default function Home() {
  return(
    <div className={css(styles.wrapper)}>
      <Content/>
      <EventBanner/>
      <Footer/>
    </div>
  )
}