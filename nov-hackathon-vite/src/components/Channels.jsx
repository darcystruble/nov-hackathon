import React, { useState } from "react";
import channelsData from "./data";
import Filter from "./Filter";

const Channels = ({ selectedFilter }) => {
  const [channels, setChannels] = useState(channelsData);
  const [joinedChannels, setJoinedChannels] = useState([]);
  const [joinPopup, setJoinPopup] = useState({ show: false, channelName: "" });

  const handleJoinClick = (channel) => {
    const isJoined = joinedChannels.includes(channel.id);

    if (isJoined) {
      // User is already joined
      const updatedJoinedChannels = joinedChannels.filter(
        (id) => id !== channel.id
      );
      setJoinedChannels(updatedJoinedChannels);
    } else {
      // User is not joined
      setJoinedChannels([...joinedChannels, channel.id]);
      alert(`You have joined the ${channel.name} channel!`);
    }
  };

  const filteredChannels = selectedFilter
    ? channels.filter((channel) => channel.type === selectedFilter)
    : channels;

  return (
    <div className="channel-outer">
      <h2>
        Online <br /> Communities
      </h2>
      <div className="channel-container">
        <div className="side-bar">
          <h3>Search</h3>
          <Filter />
        </div>
        <div>
          {filteredChannels.map((channel) => (
            <div key={channel.id} className="channel-card">
              <div className="card">
                <img src="" id={`pic${channel.id}`} alt="{channel.name}" />
                <div className="chan-card-description">
                  <h3>{channel.name}</h3>
                  <p>{channel.description}</p>
                </div>
                <button
                  onClick={() => handleJoinClick(channel)}
                  className={
                    joinedChannels.includes(channel.id) ? "joined" : ""
                  }
                >
                  {joinedChannels.includes(channel.id)
                    ? "Joined"
                    : "Join Channel"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Channels;
