import React, { useState } from "react";
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
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2 className="counter-header">Counter</h2>
      <p className="count">Count: {count}</p>
      <div>
        <button onClick={increment} className="button">Increment</button>
        <button onClick={decrement} className="button">Decrement</button>
        <button onClick={reset} className="button reset-button">Reset</button>
      </div>
    </div>
  );
}

export default App;
