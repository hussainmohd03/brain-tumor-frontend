const SignupStep2 = ({ formData, handleChange }) => {
  return (
    <>
      <div className="input-field">
        <label htmlFor="password">Choose a strong password*</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="confirmPassword">Confirm Password*</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="password-instructions">
        <p>Include special characters (e.g. &, #, @, %).</p>
        <p>Keep it longer than 8 characters.</p>
        <p>Include a number.</p>
      </div>
      <div className="input-checkbox">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          By continuing you agree to Hussain’s CoolProject{' '}
          <span>Terms and conditions</span> and <span>Privacy Policy</span>
        </label>
      </div>
    </>
  )
}
export default SignupStep2
