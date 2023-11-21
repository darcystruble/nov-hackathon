import React from 'react'

const JoinPopup = ({ channelName, onClose }) => {
  return (
    <div className="join-popup">
      <div className="popup-content">
        <p>{`You have joined the ${channelName} channel!`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default JoinPopup