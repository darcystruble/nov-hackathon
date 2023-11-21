import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Channels from "./Channels";
import channels from "./data";

const Filter = () => {
  const initialValues = {
    affiliation: "",
    channelType: "",
  };

  const [affiliation, setAffiliation] = useState("");
  const [channelType, setChannelType] = useState("");

  useEffect(() => {
    setChannelType(channels);
  }, []);

  const handleAffiliationChange = async (e) => {
    const { id, value } = e.target;
    setAffiliation({ ...affiliation, [id]: value });
  };

  const handleChannelTypeChange = async (e) => {
    const { id, value } = e.target;
    setChannelType(value);
  };

  const handleSubmit = () => {
    onFilterSubmit({
      affiliation: affiliation.affiliation,
      channelType: channelType,
    });
  };

  return (
    <div className="filter-container">
      <select
        name="Affiliation"
        type="text"
        id="affiliation"
        value={affiliation.affiliation}
        onChange={handleAffiliationChange}
      >
        <option value="Affiliation">Select Affiliation</option>
        <option value="UXDI">UXDI</option>
        <option value="SEI">SEI</option>
        <option value="DSI">DSI</option>
      </select>
      <select
        name="channelType"
        type="text"
        id="channelType"
        value={channelType}
        onChange={handleChannelTypeChange}
      >
        <option value="channel-type">Select Channel</option>
        {channels.map((channel) => (
          <option key={channel.id} value={channel.name}>
            {channel.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Apply Filters</button>
    </div>
  );
};

export default Filter;
