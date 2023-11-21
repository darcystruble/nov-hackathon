import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* navbar might not be functional */}
        <Navbar />
        <Header />

        {/* for all routes */}
        <Main.jsx />
      </div>
    </>
  );
}

export default App;
