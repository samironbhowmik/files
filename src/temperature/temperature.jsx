import React, { useState } from "react";
import "../temperature/temperature.css";
function Temperature() {
  const [temperature, setTemperature] = useState(10);
  const [color, setColor] = useState("cold");
  const handleIncrement = () => {
    // setTemperature(temperature + 1);
    const newTemp = temperature + 1;
    setTemperature(newTemp);
    if (newTemp >= 18) {
      setColor("hot");
    }
  };
  const handleDecrement = () => {
    // setTemperature(temperature - 1);
    const newTemp = temperature - 1;
    setTemperature(newTemp);
    if (newTemp < 18) {
      setColor("cold");
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading">Temperature Control</h1>
        <div className="box">
          <h1 className={`temp ${color}`}>{temperature}°C</h1>
          <div className="buttons">
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
