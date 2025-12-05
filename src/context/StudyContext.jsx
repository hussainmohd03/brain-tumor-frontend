import { createContext, useContext, useState, useEffect, use } from 'react'
import Client from '../../services/api'

const StudyContext = createContext(null)

export const StudyProvider = ({ children }) => {
  const [studies, setStudies] = useState([])
  const getStudies = async () => {
    try {
      const res = await Client.get('/api/study')
      setStudies(res.data)
    } catch (error) {
      console.error({ msg: 'error getting studies', error })
    }
  }

  const createStudy = async (formData) => {
    try {
      const res = await Client.post('/api/study', formData)
      setStudies((prev) => [...prev, res.data.study])
    } catch (error) {
      console.error({ msg: 'error creating study', error })
    }
  }
  return (
    <StudyContext.Provider value={{ getStudies, createStudy, studies }}>
      {children}
    </StudyContext.Provider>
  )
}

export const useStudy = () => useContext(StudyContext)
