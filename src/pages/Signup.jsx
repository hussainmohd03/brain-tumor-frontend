import OracleLogo from '../components/OracleLogo'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignupStep1 from '../components/SignupStep1'
import SignupStep2 from '../components/SignupStep2'

const Signup = () => {
  const navigate = useNavigate()
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!next) {
      setNext(true)
      return
    }
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      institution: formData.institution,
      nhra: formData.nhra,
      password: formData.password,
      checked: formData.checked
    }
    console.log(userData)
    setNext(false)
    navigate('/signin')
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
