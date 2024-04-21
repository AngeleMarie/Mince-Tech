import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard  from './Pages/Dashboard'

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

      </Router>
  )
}

export default App
