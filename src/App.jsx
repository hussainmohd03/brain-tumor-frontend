import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './pages/landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
