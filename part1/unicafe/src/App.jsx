import { useState } from "react"
import "./App.css"

const Card = ({ children }) => {
  return <div className="card">{children}</div>
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ width: "50%", textAlign: "right" }}>{text}:</td>
      <td style={{ width: "50%", textAlign: "left" }}>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad
  const averageScore = ((good - bad) / totalVotes).toFixed(2)
  const positiveFeedback = ((good / totalVotes) * 100).toFixed(2)

  return (
    <Card>
      <h2>Statistics</h2>
      {totalVotes === 0 && <p>No feedback given</p>}
      {totalVotes > 0 && (
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="Total votes" value={totalVotes} />
            <StatisticsLine text="Average score" value={averageScore} />
            <StatisticsLine
              text="Positive feedback"
              value={positiveFeedback + "%"}
            />
          </tbody>
        </table>
      )}
    </Card>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <>
      <h1>Unicafe App</h1>
      <Card>
        <h2>Give Feedback</h2>
        <p>How was your service with us?</p>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </Card>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
