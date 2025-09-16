import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="nav-links">
          <NavLink to="">
            <img src="/icons/create-new-study.svg" alt="Create New Study" />
          </NavLink>
          <NavLink to="/dashboard">
            <img src="/icons/dashboard-icon.svg" alt="Dashboard" />
          </NavLink>
          <NavLink to="">
            <img src="/icons/settings-icon.svg" alt="Create New Study" />
          </NavLink>
          <NavLink to="">
            <img src="/icons/analytics-icon.svg" alt="Analytics" />
          </NavLink>
          <NavLink to="/profile">
            <img src="/icons/profile-icon.svg" alt="Profile" />
          </NavLink>
        </div>
        <div className="bottom-navlinks">
          <NavLink to="">
            <img src="/icons/logout-icon.svg" alt="logout" />
          </NavLink>
          <img src="/icons/oracle-health-icon.svg" alt="oracle health logo" />
        </div>
      </nav>
    </>
  )
}
export default Sidebar
