// import React from "react";
import { Route, Routes } from "react-router-dom";
import Channel from "./Channels";
// import Filter from './Filter';
import Navbar from "./Navbar";
import Outcomes from "./Outcomes";
import SEI from "./SEI";

const Main = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/channel" element={<Channel />} />
        {/* <Route path='/filter' element={<Filter />} /> */}
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/SEI" element={<SEI />} />
      </Routes>
    </div>
  );
};

export default Main;
