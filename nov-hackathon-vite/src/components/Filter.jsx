import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import channels from "./data";

const Filter = () => {
  const initialValues = {
    affiliation: "",
    channelType: "",
    // timezone: "",
  };

  const [affiliation, setAffiliation] = useState(initialValues);
  const [channelType, setChannelType] = useState(initialValues);
  // const [timezone, setTimezone] = useState(initialValues);


  useEffect(() => {
    const getAffiliation = async () => {
      //   try {
      //     const response = await axios.get("http://localhost:3001/filter");
      //     setAffiliation(response.data);
      //   } catch (err) {
      //     console.log("Error fetching Affiliations:", err);
      //   }
    };
    getAffiliation();
  }, []);

  useEffect(() => {
    setChannelType(channels);
  }, []);


  // useEffect(() => {
  //   const getTimezone = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/");
  //       setTimezone(response.data);
  //     } catch (err) {
  //       console.log("Error fetching Timezones:", err);
  //     }
  //   };
  //   getTimezone();
  // }, []);

  const handleAffiliationChange = async (e) => {
    const { id, value } = e.target;

    if (id === "affiliation") {
      setAffiliation(value);

      try {
        const response = await axios.post("http://localhost:3001/filter", {
          affiliation: value,
        });
      } catch (err) {
        console.log("Error adding Affiliation:", err);
      }
    }
  };

  const handleChannelTypeChange = async (e) => {
    const { id, value } = e.target;

    if (id === "channelType") {
      setChannelType(value);
    }
  };

  // const handleTimezoneChange = async (e) => {
  //   const { id, value } = e.target;

  //   if (id === "timezone") {
  //     setTimezone(value);

  //     try {
  //       const response = await axios.post("http://localhost:3001/", {
  //         timezone: value,
  //       });
  //     } catch (err) {
  //       console.log("Error adding timezone:", err);
  //     }
  //   }
  // };

  return (
    <div className="filter-container">
      <select
        name="Affiliation"
        type="text"
        id="affiliation"
        // value={affiliation.affiliation}
        // onChange={handleAffiliationChange}
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
        // value={channelType.channelType}
        // onChange={handleChannelTypeChange}
      >
        <option value="channel-type">Select Channel</option>
        {channels.map((channel) => (
          <option key={channel.id} value={channel.value}>
            {channel.label}
          </option>
        ))}
      </select>
      {/* <select
        name="timezone"
        type="text"
        id="timezone"
        value={timezone.timezone}
        onChange={handleTimezoneChange}
      ></select> */}
    </div>
  );
};

export default Filter;
