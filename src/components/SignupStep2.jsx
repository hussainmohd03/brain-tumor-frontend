import Terms from "./terms"
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
        <label htmlFor="confirmPassword">Confirm password*</label>
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
      <Terms formData={formData} handleChange={handleChange} />
    </>
  )
}
export default SignupStep2
