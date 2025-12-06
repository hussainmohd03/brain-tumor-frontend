import { createContext, useContext, useEffect, useState } from 'react'
import Client from '../../services/api'
import { useAuth } from './AuthContext'

const NotificationContext = createContext(null)

export const NotificationProvider = ({ children }) => {
  const { user, setUnreadCount, setNotifications } = useAuth()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!user) return

    const loadNotification = async () => {
      try {
        const res = await Client.get('/api/user/notifications')
        setNotifications(res.data.notifications)
        setUnreadCount(res.data.notifications.length)
      } catch (error) {
        console.error('error loading notifications', error)
      }
    }

    loadNotification()
  }, [user])

  const openPanel = () => setIsOpen(true)

  const closePanel = async () => {
    try {
      await Client.post('/api/notifications/notifications')
    } catch (err) {
      console.error('Failed to mark notifications as read', err)
    } finally {
      setIsOpen(false)
      setUnreadCount(0)
    }
  }
  return (
    <NotificationContext.Provider
      value={{
        isOpen,
        openPanel,
        closePanel
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = () => useContext(NotificationContext)
