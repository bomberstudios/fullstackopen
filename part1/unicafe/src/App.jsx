import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Unicafe App</h1>
      <div className="card">
        <h2>Give Feedback</h2>
        <p>How was your service with us?</p>
        <button onClick={() => setGood((good) => good + 1)}>Good</button>
        <button onClick={() => setNeutral((neutral) => neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad((bad) => bad + 1)}>Bad</button>
      </div>
      <div className="card">
        <h2>Statistics</h2>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
      </div>
    </>
  );
}

export default App;
