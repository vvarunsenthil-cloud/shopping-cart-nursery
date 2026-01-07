import React from "react";
import "./App.css";

function App() {
  const handleStart = () => {
    alert("Get Started clicked");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful plants</p>
        <button onClick={handleStart}>Get Started</button>
      </div>
    </div>
  );
}

export default App;
