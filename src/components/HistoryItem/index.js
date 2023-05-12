import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const historyDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="li">
      <div className="items">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>

      <div>
        <button
          className="btn"
          onClick={historyDelete}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
