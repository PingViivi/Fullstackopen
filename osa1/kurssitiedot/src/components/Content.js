import Part from "./Part"
const Content = (props) => {  
  console.log(props)    
  return (
    <>{
      props.parts.map((item) => {
        return (
          <Part name={item.name} exercises={item.exercises}></Part>
        )
      })
    }
      </>
    )
  }
  
export default Content