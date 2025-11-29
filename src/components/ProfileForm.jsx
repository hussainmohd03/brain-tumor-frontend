const ProfileForm = ({
  profile,
  editingField,
  handleChange,
  setEditingField
}) => {
  return (
    <>
      <div className="input-field profile-edit">
        <label htmlFor="NHRA-License">NHRA License</label>
        <div className="edit-field">
          <input
            type="text"
            id="NHRA-License"
            name="nhraLicense"
            value={profile.nhraLicense}
            readOnly
          />
        </div>
      </div>
      <hr className="profile-edit " />
      <div className="input-field profile-edit">
        <label htmlFor="NHRA-Holder-Name">NHRA Holder Name</label>
        <div className="edit-field">
          <input
            type="text"
            id="NHRA-Holder-Name"
            name="nhraHolderName"
            value={profile.nhraHolderName}
            readOnly={editingField !== 'nhraHolderName'}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-field profile-edit">
        <label htmlFor="NHRA-Holder-Email">NHRA Holder Email</label>
        <div className="edit-field">
          <input
            type="email"
            id="NHRA-Holder-Email"
            name="nhraHolderEmail"
            value={profile.nhraHolderEmail}
            readOnly={editingField !== 'nhraHolderEmail'}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}
export default ProfileForm
