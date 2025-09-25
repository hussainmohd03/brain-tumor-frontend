import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import StartStudy from '../components/StartStudy'
import StudyStep1 from '../components/StudyStep1'
const CreateStudy = () => {
  const [starting, setStarting] = useState(true)
  const [next, setNext] = useState(false)
  return (
    <>
      <main className="main-container">
        <Header />
        <Sidebar />
        <section className="create-study-section">
          {(starting && <StartStudy setStarting={setStarting} />) || (
            <>
              <div className="study-form">
                <h1 className="create-study-title">Create a new study</h1>
                <div className="upload-form-1">
                  <h3 className="create-study-subtitle">
                    Fill in the following fields
                  </h3>
                  <form action="">
                    <StudyStep1 />

                    <button className="save-button create-study-button" type="submit">
                      {!next ? 'Continue' : 'submit'}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </section>
        <img src="/logos/oracle-logo.svg" alt="Oracle Logo" id="oracle-logo" />
      </main>
    </>
  )
}

export default CreateStudy
