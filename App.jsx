

import { useState } from 'react'
const StatisticLine = (props) => {
  return  (
    <tr>
      <td>{props.text} {props.number}</td>
    </tr>)
}
const Statistics = (props) => {
  let prom = (props.good +(props.bad*-1))/(props.good + props.neutral + props.bad);
  let porc = props.good/(props.good+props.bad+props.neutral)
  return(
    <table> 
      <tbody>
        <StatisticLine text='good' number={props.good}></StatisticLine>
        <StatisticLine text='neutral' number={props.neutral}></StatisticLine>
        <StatisticLine text='bad' number={props.bad}></StatisticLine>
        <StatisticLine text='all' number={props.good + props.neutral + props.bad}></StatisticLine>
        <StatisticLine text='avarage' number={prom}></StatisticLine>
        <StatisticLine text='positive' number={porc}></StatisticLine>
      </tbody>      
    </table>
  )  
}
const Button = (props) =>{
  return(
    <button onClick={props.func}>{props.text}</button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good+1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleClickBad = () => {
    setBad(bad+1)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button func={handleClickGood} text='good'></Button>
      <Button func={handleClickNeutral} text='neutral'></Button>
      <Button func={handleClickBad} text='bad'></Button>
      
      <h1>statistics</h1>
      {(good===0 && bad===0 && neutral===0)? <p>No feedback given</p> :<Statistics good={good} neutral={neutral} bad={bad}></Statistics>}   
      
      
    </div>
  )
}

export default App