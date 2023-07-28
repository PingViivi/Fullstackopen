import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
  const amount = props.course.parts.map(part => part.exercises)
  let sum = amount.reduce(function(a, b){
    return a + b;
  });
  
  return (
    <>
      <Header course={props.course.name} />
      <Content 
        parts={props.course.parts} 
      />
      <Total sum={sum} />
    </>
  )
}

export default Course