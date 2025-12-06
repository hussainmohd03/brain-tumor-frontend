import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { StudyProvider } from './context/StudyContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <StudyProvider>
          <NotificationProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </NotificationProvider>
        </StudyProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
)
