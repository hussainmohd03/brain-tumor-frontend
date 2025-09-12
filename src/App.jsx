import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './pages/landing'
import Signup from './pages/Signup'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
