import OracleLogo from '../components/OracleLogo'
const Signup = () => {
  return (
    <>
      <main className="page-container">
        <OracleLogo />
        <section className="page-content signup-content">
          <h2 id="signup-title">Get client intuitive clinical experiences </h2>
          <h1 id="signup-header">Sign up</h1>
          <form action="">
            <div className="input-field">
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email*</label>
              <input type="email" />
            </div>
            <div className="input-field">
              <label htmlFor="institution">Institution*</label>
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="NHRA">NHRA License*</label>
              <input type="text" minLength={8} />
            </div>
            <button type="submit" className='signup-button'>Continue</button>
          </form>
            <p id='login-prompt'>Already have an account? <a href="/login">Login</a></p>
        </section>

        <img src="oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default Signup
