const SignupStep1 = ({ formData, handleChange }) => {
  return (
    <>
      <div className="input-field">
        <label htmlFor="fullName">Full Name*</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="institution">Institution*</label>
        <input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="NHRA">NHRA License*</label>
        <input
          type="text"
          name="nhra"
          minLength={8}
          maxLength={8}
          value={formData.nhra}
          onChange={handleChange}
          required
        />
      </div>
    </>
  )
}
export default SignupStep1
