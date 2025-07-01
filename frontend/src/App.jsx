// import './App.css'
// import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>

    <Link to='/admin'><button>AdminPage</button></Link>
    <Link to='/landingPage'><button>LandingPage</button></Link>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/landingpage' element={<LandingPage/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App;