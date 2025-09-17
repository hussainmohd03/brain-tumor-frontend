const ProfileForm = ({ profile, editingField, handleChange, setEditingField }) => {
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
                <p className="nhra-edit">Edit</p>
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
                {editingField === 'nhraHolderName' ? (
                  <p>Editing...</p>
                ) : (
                  <p onClick={() => setEditingField('nhraHolderName')}>Edit</p>
                )}
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
                {editingField === 'nhraHolderEmail' ? (
                  <p>Editing...</p>
                ) : (
                  <p onClick={() => setEditingField('nhraHolderEmail')}>Edit</p>
                )}
              </div>
            </div>
    </>
  )
}
export default ProfileForm