const StudyStep1 = () => {
  return (
    <>
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="NHRA-License">NHRA License No*</label>
        <div className="edit-field">
          <input type="text" id="NHRA-License" name="nhraLicense" />
        </div>
      </div>
      <hr className="profile-edit create-study-hr" />
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="Patient-ID">Patient ID*</label>
        <div className="edit-field">
          <input type="text" id="Patient-ID" name="patientId" />
        </div>
      </div>
      <div className="input-field profile-edit create-study-input">
        <label htmlFor="Date-Time">Date & Time</label>
        <div className="edit-field">
          <input type="text" id="Date-Time" name="dateTime" value="Data will be prefilled" readOnly />
        </div>
      </div>
    </>
  )
}
export default StudyStep1
