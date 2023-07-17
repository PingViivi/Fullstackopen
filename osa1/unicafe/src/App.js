import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // Functiot
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <>
      <h2>Give feedback</h2>
      <Button text={"Good"} action={increaseGood}/>
      <Button text={"Neutral"} action={increaseNeutral}/>
      <Button text={"Bad"} action={increaseBad}/>
      
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App