import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
// import Filter from "./components/Filter";
// import Channels from "./components/Channels";
// import Navbar from './components/Navbar'
import "./App.css";

function App() {
  const [selectedFilter, setSelectedFilter] = useState({});

  const handleFilterSubmit = (filters) => {
    setSelectedFilter(filters);
  };

  return (
    <>
      <div className="app-container">
        <Header />
        {/* for all routes */}
        <Main />
        {/* <Filter onFilterSubmit={handleFilterSubmit} />
        <Channels filters={selectedFilter} /> */}
      </div>
    </>
  );
}

export default App;
