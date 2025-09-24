import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const CreateStudy = () => {
  return (
    <>
      <main className="main-container">
        <Header />
        <Sidebar />
        <section className="create-study-section">
          <div className="starting">
            <img src="/images/bar.svg" alt="" id="bar-img" />
            <div>
              <h1 className="create-study-title">
                Intelligence––like never before.
              </h1>
              <div className="image-container">
                <div className="image-overlay">
                  <h3>Oracle Health Possibilities</h3>
                  <p>
                    You can now process your local scans for precise and
                    detailed discoveries. Explore the exclusive offerings of
                    OHP.
                  </p>
                  <button className='uncover-button'>Uncover a new world</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default CreateStudy
