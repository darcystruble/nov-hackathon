import { useState } from "react";
import Main from "./components/Main";
import Header from './components/Header';
// import Navbar from './components/Navbar'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Header />
        {/* for all routes */}
        <Main />
      </div>
    </>
  );
}

export default App;
