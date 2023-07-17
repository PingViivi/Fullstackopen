import StatisticsLine from "./StatisticLine"

const Statistics = (props) => {
    // propsit
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    // kaikki
    const all = good + bad + neutral
    
    // keskiarvo: hyvän arvo 1, neutraalin 0, huonon -1
    const average = good * 1 + bad * (-1) / all

    // kuinka monta prosenttia palautteista on ollut positiivisia
    const percent = good / all * 100
    
    if (all > 0) {
        return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <StatisticsLine text={"Good"} value={good}/>
                <StatisticsLine text={"Neutral"} value={neutral}/>
                <StatisticsLine text={"Bad"} value={bad}/>
                <StatisticsLine text={"all"} value={all}/>
                <StatisticsLine text={"average"} value={average}/>
                <StatisticsLine text={"percent"} value={percent}/>
                </tbody>
            </table>
        </>
        )
    }
    return (
        <>
         <p>No feedback given</p>
        </>
      )
}
  
export default Statistics