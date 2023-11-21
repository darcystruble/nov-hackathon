// import React from "react";
import { Route, Routes } from "react-router-dom";
import Channel from "./Channels";
// import Filter from './Filter';
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/channel" element={<Channel />} />
        {/* <Route path='/filter' element={<Filter />} /> */}
      </Routes>
    </div>
  );
};

export default Main;
