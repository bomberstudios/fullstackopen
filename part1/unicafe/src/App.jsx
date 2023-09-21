import { useState } from "react";
import "./App.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad;
  const averageScore = ((good - bad) / totalVotes).toFixed(2);
  const positiveFeedback = ((good / totalVotes) * 100).toFixed(2);
  return (
    <Card>
      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total votes: {totalVotes}</div>
      <div>Average score: {averageScore > 0 ? averageScore : 0}</div>
      <div>
        Positive feedback: {positiveFeedback > 0 ? positiveFeedback : 0}%
      </div>
    </Card>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Unicafe App</h1>
      <Card>
        <h2>Give Feedback</h2>
        <p>How was your service with us?</p>
        <button onClick={() => setGood((good) => good + 1)}>Good</button>
        <button onClick={() => setNeutral((neutral) => neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad((bad) => bad + 1)}>Bad</button>
      </Card>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
