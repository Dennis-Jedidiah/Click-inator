import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="content">
        <div className="content-inner">
          <h2>You have clicked</h2>
          <span className="number_display">{clickCount}</span>
          <h3>Times</h3>
        </div>
        <div className="button-group">
          <button onClick={handleClick} className="primary_button">Click me</button>
          <button onClick={resetCount} className="Secondary_button">Reset</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
