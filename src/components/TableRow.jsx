import { formatDateTime } from '../../utils'
const TableRow = ({ study }) => {
  return (
    <>
      <div className="table-row">
        <div className="study-filename">
          <img src="/icons/filetype.svg" alt="file type" className="file-tag" />
          NHRA-{study.user.nhra}-Patient-{study.patientId}
        </div>

        <div className="study-date">{formatDateTime(study.createdAt)}</div>

        <div className="study-status">
          {study.status === 'complete' ? (
            <>
              <span className="status-complete">Complete.</span>
              <img
                className="download-icon"
                src="/icons/download.svg"
                alt="download"
                onClick={() => (window.location.href = study.report.filePath)}
              />
            </>
          ) : (
            <span className="status-processing">Processing</span>
          )}
        </div>
      </div>
    </>
  )
}
export default TableRow
