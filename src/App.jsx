import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [conditionalRendering, setConditionalRendering] = useState(true);

  useEffect(() => {
    // Toggle `conditionalRendering` every 2 seconds
    const interval = setInterval(() => {
      setConditionalRendering((prev) => !prev);
    }, 2000);

    // Cleanup: clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run this effect once on mount

  return (
    <div className="app">
      {conditionalRendering ? (
        <div>
          <h1 className="header">React Counter</h1>
          <Counter />
        </div>
      ) : (
        <h1 className="header">Component Hidden</h1>
      )}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start an interval that updates the count every second
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Use functional update to ensure the latest value
    }, 1000);

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="counter">
      <h2 className="counter-header">Counter</h2>
      <p className="count">Count: {count}</p>
    </div>
  );
}

export default App;
