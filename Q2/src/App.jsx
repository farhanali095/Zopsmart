import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (color) {
        case "green":
          setColor("yellow");
          break;
        case "yellow":
          setColor(color === "green" ? "yellow" : "red");
          break;
        case "red":
          setColor("yellow");
          break;
        default:
          setColor("green");
      }
    }, getIntervalTime(color));

    return () => clearInterval(interval);
  }, [color]);

  const getIntervalTime = (color) => {
    switch (color) {
      case "green":
        return 3000;
      case "yellow":
        return color === "green" ? 3000 : 5000;
      case "red":
        return 2000;
      default:
        return 3000;
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{
          backgroundColor: color === "green" ? "green" : "#333",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          transition: "background-color 0.5s ease",
        }}
      ></div>
      <div
        style={{
          backgroundColor: color === "yellow" ? "yellow" : "#333",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          transition: "background-color 0.5s ease",
        }}
      ></div>
      <div
        style={{
          backgroundColor: color === "red" ? "red" : "#333",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          transition: "background-color 0.5s ease",
        }}
      ></div>
    </div>
  );
};

export default App;
