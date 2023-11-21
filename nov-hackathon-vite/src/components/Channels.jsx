import React, { useState } from "react";
import channelsData from "./data";
import Filter from "./Filter";

const Channels = () => {
  const [channels, setChannels] = useState(channelsData);
  const [joinedChannels, setJoinedChannels] = useState([]);
  const [joinPopup, setJoinPopup] = useState({ show: false, channel: null });
  // const [joinConfirmation, setJoinConfirmation] = useState(false)

  const handleJoinClick = (channel) => {
    const isJoined = joinedChannels.includes(channel.id);

    if (isJoined) {
      // User is already joined
      const updatedJoinedChannels = joinedChannels.filter(
        (id) => id !== channel.id
      );
      setJoinedChannels(updatedJoinedChannels);
    } else {
      // Show the confirmation popup
      setJoinPopup({ show: true, channel: channel });
    }
  };

  // const filteredChannels = selectedFilter
  //   ? channels.filter((channel) => channel.type === selectedFilter)
  //   : channels;

  const confirmJoin = () => {
    // Close the confirmation popup
    setJoinPopup({ show: false, channel: null });

    // Join the channel
    setJoinedChannels([...joinedChannels, joinPopup.channel.id]);
  };

  const cancelJoin = () => {
    // Close the confirmation popup
    setJoinPopup({ show: false, channel: null });
  };

  const handleFilterSubmit = (filters) => {
    const filteredChannels = channelsData.filter((channel) => {
      return (
        (filters.affiliation === "" ||
          channel.affiliation === filters.affiliation) &&
        (filters.channelType === "all" || channel.name === filters.channelType)
      );
    });
    setChannels(filteredChannels);
  };

  return (
    <div className="channel-outer">
      <h2>
        Online <br /> Communities
      </h2>
      <div className="channel-container">
        <div className="side-bar">
          <h3>Search</h3>
          <Filter onFilterSubmit={handleFilterSubmit} />
        </div>
        <div>
          {channels.map((channel) => (
            <div key={channel.id} className="channel-card">
              <div className="card">
                <img src="" id={`pic${channel.id}`} alt="{channel.name}" />
                <div className="chan-card-description">
                  <h3>{channel.name}</h3>
                  <h4>Slack Channel Name: #{channel.slack_name}</h4>
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

      {joinPopup.show && (
        <div className="popup">
          <p>Do you want to join {joinPopup.channel.name} channel?</p>
          <button onClick={confirmJoin}>Yes</button>
          <button onClick={cancelJoin}>No</button>
        </div>
      )}

      {/* {joinConfirmation && (
        <div className="confirmation-message">
          <p>You have joined the {joinPopup.channel.name} channel!</p>
        </div>
      )} */}
    </div>
  );
};

export default Channels;