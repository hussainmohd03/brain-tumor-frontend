import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './pages/landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import CreateStudy from './pages/CreateStudy'
import Settings from './pages/Settings'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-study' element={<CreateStudy />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
