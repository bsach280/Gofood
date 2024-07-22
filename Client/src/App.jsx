import { useState } from 'react'
import './App.css'

import Home from './Screen/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"
import Login from './Screen/Login'
import Signup from './Screen/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createuser' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </div>
    </Router>
    
        
    </>
  )
}

export default App
