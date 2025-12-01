import { createContext, useContext, useState, useEffect } from 'react'
import Client from '../../services/api'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await Client.get('/api/user/')
        setUser(res.data)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async ({ email, password }) => {
    try {
      setAuthLoading(true)
      await Client.post('/api/auth/login', { email, password })
      const res = await Client.get('/api/user/')
      setUser(res.data)
      navigate('/dashboard')
    } catch (error) {
      throw error
    } finally {
      setAuthLoading(false)
    }
  }

  const signup = async (formData) => {
    try {
      setAuthLoading(true)
      await Client.post('/api/auth/register', { email, password })
      const res = await Client.get('/api/user/')
      setUser(res.data)
      navigate('/login')
    } catch (error) {
      throw error
    } finally {
      setAuthLoading(false)
    }
  }

  const logout = async () => {
    try {
      await Client.post('/api/auth/logout')
    } catch (error) {
      throw error
    } finally {
      setUser(null)
      navigate('/signin')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authLoading,
        login,
        signup,
        logout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
