import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="header">React Counter</h1>
      <Counter />
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
