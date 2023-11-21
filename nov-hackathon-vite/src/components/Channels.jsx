import React, { useState } from "react"
import channelsData from "../data"
import JoinPopup from './JoinPopup'

const Channels = () => {
  const [channels, setChannels] = useState(channelsData)
  const [joinedChannels, setJoinedChannels] = useState([])
  const [joinPopup, setJoinPopup] = useState({ show: false, channelName: '' })

  const handleJoinClick = (channel) => {
    const isJoined = joinedChannels.includes(channel.id)

    if (isJoined) {
      // User is already joined
      const updatedJoinedChannels = joinedChannels.filter(id => id !== channel.id)
      setJoinedChannels(updatedJoinedChannels)
    } else {
      // User is not joined
      setJoinedChannels([...joinedChannels, channel.id])
      setJoinPopup({ show: true, channelName: channel.name })
    }
  }

  const handleClosePopup = () => {
    setJoinPopup({ show: false, channelName: '' })
  }

  return (
    <div>
      {channels.map(channel => (
        <div key={channel.id} className="channel-card">
          <img src={channel.image} alt={channel.name} />
          <h3>{channel.name}</h3>
          <p>{channel.description}</p>
          <button
            onClick={() => handleJoinClick(channel)}
            className={joinedChannels.includes(channel.id) ? 'joined' : ''}
          >
            {joinedChannels.includes(channel.id) ? 'Joined' : 'Join Channel'}
          </button>
        </div>
      ))}

      {joinPopup.show && (
        <JoinPopup channelName={joinPopup.channelName} onClose={handleClosePopup} />
      )}
    </div>
  )
}

export default Channels;
