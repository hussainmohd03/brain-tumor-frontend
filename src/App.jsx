import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './pages/landing'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
