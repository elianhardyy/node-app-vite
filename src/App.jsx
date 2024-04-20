import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import axios from "axios";
import { UserContextProvider } from './context/userContext'
import Login from './pages/Login'
import Esp from './pages/Esp'
import Waste from './pages/Waste'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/monitor-waste' element={<Waste/>}/>
          <Route path='/esp' element={<Esp/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
