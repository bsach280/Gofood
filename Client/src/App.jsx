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
import { CartProvider } from './Components/ContextReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createuser' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </div>
    </Router>
    </CartProvider>
   
    
        
    </>
  )
}

export default App
