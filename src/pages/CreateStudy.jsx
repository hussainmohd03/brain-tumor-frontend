import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const CreateStudy = () => {
  return (
    <>
      <main className="main-container">
        <Header />
        <Sidebar />
        <section className="create-study-section"></section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default CreateStudy
