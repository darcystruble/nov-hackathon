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
      try {
        const response = await axios.get("http://localhost:3001/filter");
        setAffiliation(response.data);
      } catch (err) {
        console.log("Error fetching Affiliations:", err);
      }
    };
    getAffiliation();
  }, []);

  useEffect(() => {
    const getChannelType = async () => {
      try {
        const response = await axios.get("http://localhost:3001/filter");
        setChannelType(response.data);
      } catch (err) {
        console.log("Error fetching Channel Types:", err);
      }
    };
    getChannelType();
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

      try {
        const response = await axios.post("http://localhost:3001/filter", {
          channelType: value,
        });
      } catch (err) {
        console.log("Error adding channelType:", err);
      }
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
        value={channelType.channelType}
        onChange={handleChannelTypeChange}
      >
        <option value="channel-type">Select Channel</option>
        <option value="ga-lgbtqia-srg">LGBTQIA</option>
        <option value="ga-pets-srg">Pets</option>
        <option value="ga-epic-srg">EPIC</option>
        <option value="ga-womenintech-srg">Women in Tech</option>
        <option value="ga-parents-guardians-srg">Parents/Guardians</option>
        <option value="ga-neurodiversityintech-srg">
          Neurodiversity in Tech
        </option>
        <option value="ga-gamers-srg">Gamers</option>
        <option value="ga-blackintech-srg">Black in Tech</option>
        <option value="uxdi-lounge">UXDI lounge</option>
        <option value="sei-lounge">SEI lounge</option>
        <option value="dsi-lounge">DSI lounge</option>
        <option value="hired-in-tech">Hired in Tech</option>
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
