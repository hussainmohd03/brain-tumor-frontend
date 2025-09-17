import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {
  const [editingField, setEditingField] = useState(null)

  const [profile, setProfile] = useState({
    nhraLicense: 'NHRA-123456',
    nhraHolderName: 'Hussain Ahmed',
    nhraHolderEmail: 'hussain@example.com'
  })

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    setEditingField(null)
    // API call
  }

  return (
    <>
      <main className="main-container">
        <Header />
        <Sidebar />
        <section className="profile-right profile-section">
          <div className="profile-image-container">
            <img
              src="/images/profile-placeholder.svg"
              alt="Profile"
              className="profile-image"
            />
            <img
              src="/icons/image-edit-icon.svg"
              alt="Edit"
              className="image-edit-icon"
            />
          </div>
        </section>
        <section className="profile-left">
          <h1>Profile</h1>
          <form>
            <ProfileForm
              profile={profile}
              editingField={editingField}
              handleChange={handleChange}
              setEditingField={setEditingField}
            />
          </form>
          {editingField && (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          )}
        </section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default Profile
