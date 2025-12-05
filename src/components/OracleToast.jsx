const OracleToast = ({ message }) => {
  return (
    <div className="oracle-toast">
      <div className="oracle-toast-header">
        <div className="oracle-left">
          <img src="/logos/oracle_notif_logo.svg" className="oracle-icon" />
          <span className="oracle-title">ORACLE</span>
        </div>

        <span className="oracle-time">Just now</span>
      </div>

      <p className="oracle-message">{message}</p>
    </div>
  )
}

export default OracleToast
