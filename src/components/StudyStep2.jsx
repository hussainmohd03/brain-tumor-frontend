const StudyStep2 = ({ formData, handleChange }) => {
  return (
    <>
      <h3 className="create-study-subtitle">Upload your scan</h3>
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="NHRA-License">NHRA License No*</label>
        <div className="edit-field">
          <input
            type="text"
            id="NHRA-License"
            name="nhraLicense"
            value={formData.nhraLicense}
            onChange={handleChange}
            
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
          />
        </div>
      </div>
    </>
  )
}

export default StudyStep2
