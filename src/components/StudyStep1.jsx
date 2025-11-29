const StudyStep1 = ({ formData, handleChange }) => {
  return (
    <>
      <h3 className="create-study-subtitle">Fill in the following fields</h3>
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="NHRA-License">NHRA License No*</label>
        <div className="edit-field">
          <input
            type="text"
            id="NHRA-License"
            name="nhraLicense"
            value={formData.nhraLicense}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
      </div>
      <hr className="profile-edit create-study-hr" />
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="Patient-ID">Patient ID*</label>
        <div className="edit-field">
          <input
            type="text"
            id="Patient-ID"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="Date-Time">Date & Time</label>
        <div className="edit-field">
          <input
            type="text"
            id="Date-Time"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </>
  )
}
export default StudyStep1
