import { createContext, useContext, useState, useEffect } from 'react'
import Client from '../../services/api'
import { createSocket } from '../realtime/socket'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import OracleToast from '../components/OracleToast'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (!user) return
    const socket = createSocket()
    setSocket(socket)

    socket.on('Notification', (notif) => {
      toast.info(<OracleToast message={notif.message} />, {
        position: 'top-right',
        autoClose: 500,
        closeButton: false,
        hideProgressBar: true,
        draggable: false
      })
    })

    return () => {
      socket.disconnect()
    }
  }, [user])

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await Client.get('/api/user')
        setUser(res.data.user)
      } catch {
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

      const res = await Client.get('/api/user')
      setUser(res.data.user)

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

      await Client.post('/api/auth/register', formData)

      navigate('/signin')
    } catch (error) {
      throw error
    } finally {
      setAuthLoading(false)
    }
  }

  const logout = async () => {
    try {
      await Client.post('/api/auth/logout')
    } finally {
      if (socket) socket.disconnect()
      setUser(null)
      navigate('/signin')
    }
  }

  const sendResetLink = async (email) => {
    try {
      return await Client.post('/api/auth/forget-password', email)
    } catch (error) {
      console.error({ msg: 'error in sending reset link', error })
    }
  }
  const ResetPassword = async (formData) => {
    try {
      await Client.post('/api/auth/reset-password', formData)
      navigate('/dashboard')
    } catch (error) {
      console.error({ msg: 'error in sending reset link', error })
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
        setUser,
        sendResetLink,
        ResetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
