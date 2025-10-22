import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import StartStudy from '../components/StartStudy'
import StudyStep1 from '../components/StudyStep1'
import StudyStep2 from '../components/StudyStep2'
const CreateStudy = () => {
  const [starting, setStarting] = useState(true)
  const [next, setNext] = useState(false)
  const [formData, setFormData] = useState({
    nhraLicense: '',
    patientId: '',
    dateTime: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!next) {
      setNext(true)
      return
    }
    const userData = {
      nhraLicense: formData.nhraLicense,
      patientId: formData.patientId,
      dateTime: formData.dateTime
    }
    console.log(userData)
    setNext(false)
    navigate('/dashboard')
  }

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
                  <form onSubmit={handleSubmit}>
                    {(!next && (
                      <StudyStep1
                        formData={formData}
                        handleChange={handleChange}
                      />
                    )) || (
                      <StudyStep2
                        formData={formData}
                        handleChange={handleChange}
                      />
                    )}

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
