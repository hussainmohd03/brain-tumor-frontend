import OracleLogo from '../components/OracleLogo'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SignupStep1 from '../components/SignupStep1'
import SignupStep2 from '../components/SignupStep2'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { signup, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user])
  const [next, setNext] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    nhra: '',
    password: '',
    confirmPassword: '',
    checked: false
  })

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const validatePassword = () => {
    const hasNumber = /\d/.test(formData.password)
    const hasSpecial = /[^A-Za-z0-9]/.test(formData.password)
    const hasMinLength = formData.password.length >= 8
    const passwordsMatch =
      formData.password === formData.confirmPassword && formData.password !== ''

    return hasNumber && hasSpecial && hasMinLength && passwordsMatch
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!next) {
      setNext(true)
      return
    }
    if (validatePassword && formData.checked) {
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        Institution: formData.institution,
        nhra: Number(formData.nhra),
        password: formData.password,
        confirmPassword: formData.confirmPassword
      }
      await signup(userData)
    }
  }

  return (
    <>
      <main className="page-container">
        <OracleLogo />
        <section className="page-content signup-content">
          <h2 id="signup-title">Get client intuitive clinical experiences </h2>
          <h1 id="signup-header">Sign up</h1>
          <form onSubmit={handleSubmit}>
            {(!next && (
              <SignupStep1 formData={formData} handleChange={handleChange} />
            )) || (
              <SignupStep2 formData={formData} handleChange={handleChange} />
            )}

            <button className="signup-button" type="submit">
              {!next ? 'Continue' : 'Sign up'}
            </button>
          </form>
          {!next && (
            <p id="login-prompt">
              Already have an account? <a href="/signin">Login</a>
            </p>
          )}
        </section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default Signup
