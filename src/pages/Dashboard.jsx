import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const Dashboard = () => {
  return (
    <>
      <main className="main-container">
        <Header />
        <Sidebar />
        <section className="settings-content">
          <h1 className="page-title">All studies</h1>
          <section className="table-container">
            <h3 className="table-header file-name">File Name</h3>
            <h3 className="table-header created-on">Created on</h3>
            <h3 className="table-header status">Status</h3>
            <div className="table-content">
              
            </div>
          </section>
        </section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default Dashboard
