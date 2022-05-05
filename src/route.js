import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../src/components/user/home'
import Dashboard from './components/admin/pages/dashboard';
import EventDetail from './components/admin/pages/EventDetail';

export default function AppNavigator() {
  return(
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/admin' element={<Dashboard/>}></Route>
          <Route exact path='/eventDetail/:eventId' element={<EventDetail/>}></Route>
        </Routes>
    </Router>
  )
}