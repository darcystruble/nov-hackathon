import React from "react";
import { Routes, Route } from "react-router-dom";
import Channel from './Channels'
import Filter from './Filter'
import Header from './Header'
import Navbar from './Navbar'
import App from '../App'

const Main = () => {
  return <div>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/channel' element={<Channel />} />
      <Route path='/filter' element={<Filter />} />
      <Route path='/header' element={<Header />} />
      <Route path='/navbar' element={<Navbar />} />
    </Routes>
  </div>;
};

export default Main;
