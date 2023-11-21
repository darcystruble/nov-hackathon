import React, { useState } from "react"
import channelsData from "./data"

const Channels = () => {
  const [channels, setChannels] = useState(channelsData)
  const [joinedChannels, setJoinedChannels] = useState([])
  const [joinPopup, setJoinPopup] = useState({ show: false, channelName: '' })

  const handleJoinClick = (channel) => {
    const isJoined = joinedChannels.includes(channel.id)

    if (isJoined) {
      // User is already joined
      const updatedJoinedChannels = joinedChannels.filter((id) => id !== channel.id)
      setJoinedChannels(updatedJoinedChannels)
    } else {
      // User is not joined
      setJoinedChannels([...joinedChannels, channel.id])
      alert(`You have joined the ${channel.name} channel!`)
    }
  }

  return (
    <div>
      {channels.map(channel => (
        <div key={channel.id} className="channel-card" >
        <div className="card">
        <img src="" id={`pic${channel.id}`} alt="{channel.name}" />
          <h3>{channel.name}</h3>
          <p>{channel.description}</p>
          <button
            onClick={() => handleJoinClick(channel)}
            className={joinedChannels.includes(channel.id) ? 'joined' : ''}
          >
            {joinedChannels.includes(channel.id) ? 'Joined' : 'Join Channel'}
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Channels
