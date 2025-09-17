const Terms = ({ formData, handleChange }) => {
  return (
    <div className="input-checkbox">
      <input
        type="checkbox"
        id="terms"
        checked={formData.checked}
        onChange={handleChange}
        name="checked"
      />
      <label htmlFor="terms">
        By continuing you agree to Hussain’s Cool Project{' '}
        <span>Terms and conditions</span> and <span>Privacy Policy</span>
      </label>
    </div>
  )
}
export default Terms
