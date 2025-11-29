import OracleLogo from '../components/OracleLogo'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Terms from '../components/terms'
import SigninForm from '../components/SigninForm'
const Signin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if (formData.checked) {
      const userData = {
        email: formData.email,
        password: formData.password,
        checked: formData.checked
      }
      console.log(userData)
      navigate('/dashboard')
    }
  }

  return (
    <>
      <main className="page-container">
        <OracleLogo />
        <section className="page-content signup-content">
          <h2 id="signup-title">Get client intuitive clinical experiences </h2>
          <h1 id="signup-header">Sign in</h1>
          <form onSubmit={handleSubmit}>
            <SigninForm formData={formData} handleChange={handleChange} />
            <Terms formData={formData} handleChange={handleChange} />
            <button className="signup-button" type="submit">
              Sign in
            </button>
          </form>

          <p id="login-prompt">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}
export default Signin
