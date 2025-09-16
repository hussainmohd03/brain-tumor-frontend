import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const Profile = () => {
  return (
    <>
      <main className="main-container">
        <Header />
        <Sidebar />
        <section className="profile-right"></section>
        <section className="profile-left">
          <div className="input-field">
            <label htmlFor="NHRA-License">NHRA License</label>
            <input type="text" id="NHRA-License" name="NHRA-License" placeholder="NHRA-123456" />
          </div>
          <hr />
          <div className="input-field">
            <label htmlFor="NHRA-Holder-Name">NHRA Holder Name</label>
            <input type="text" id="NHRA-Holder-Name" name="NHRA-Holder-Name" placeholder="Hussain Ahmed" />
          </div>
          <div className="input-field">
            <label htmlFor="NHRA-Holder-Email">NHRA Holder Email</label>
            <input type="text" id="NHRA-Holder-Email" name="NHRA-Holder-Email" placeholder="hussain@example.com" />
          </div>
        </section>

        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}
export default Profile
