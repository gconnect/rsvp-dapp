import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from '../src/components/user/home'
import Admin from './components/admin/pages/admin';

export default function AppNavigator() {
  return(
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/admin' element={<Admin/>}></Route>
        </Routes>
    </Router>
  )
}