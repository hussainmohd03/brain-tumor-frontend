import { useNavigate } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <main className="landing-page-main">
        <section className="landing-page-logo">
          <img src="logo.svg" alt="OHP Logo" />
        </section>
        <section className="landing-page-content">
          <h2>Oracle Health</h2>
          <h1>Possibilities</h1>
          <p>
            Reimagine the future of health with an automated, secure machine
            learning platform fostering the greatness of accuracy{' '}
          </p>
          <button>Explore OHP</button>
        </section>
        <section className="landing-page-img">
          <img src="landing-side-img.svg" alt="" />
        </section>
      </main>
    </>
  )
}

export default Landing
