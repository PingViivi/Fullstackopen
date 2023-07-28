import Part from "./Part"
const Content = (props) => {  
  return (
    <>
      {
        props.parts.map((item, key) => {
          return (
            <Part key={key} name={item.name} exercises={item.exercises}></Part>
          )
        })
      }
    </>
  )
}
  
export default Content