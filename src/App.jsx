import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [conditionalRendering, setConditionalRendering] = useState(true);
  const [count, setCount] = useState(0); // Move count state here

  useEffect(() => {
    // Toggle `conditionalRendering` every 2 seconds
    const interval = setInterval(() => {
      setConditionalRendering((prev) => !prev);
    }, 2000);

    // Cleanup: clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run this effect once on mount

  useEffect(() => {
    // Increment the counter only when `conditionalRendering` is true
    if (conditionalRendering) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      // Cleanup the interval when `conditionalRendering` turns false
      return () => clearInterval(interval);
    }
  }, [conditionalRendering]); // Runs when `conditionalRendering` changes

  return (
    <div className="app">
      {conditionalRendering ? (
        <div>
          <h1 className="header">React Counter</h1>
          <Counter count={count} />
        </div>
      ) : (
        <h1 className="header">Component Hidden</h1>
      )}
    </div>
  );
}

function Counter({ count }) {
  return (
    <div className="counter">
      <h2 className="counter-header">Counter</h2>
      <p className="count">Count: {count}</p>
    </div>
  );
}

export default App;
