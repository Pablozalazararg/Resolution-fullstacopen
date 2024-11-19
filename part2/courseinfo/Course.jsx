
const Parts = (props) => {
  const infoCourse = props.course.map(elemento=><li key={elemento.id}>{elemento.name} {elemento.exercises}</li>)
  let total = 0
  props.course.map(elemento=>total+=elemento.exercises)
  return(
    <>
      <ul>
        {infoCourse}
      </ul>
      <p><b>total of {total} exercises</b></p>
    </>
  )
}

const Course = (props) =>{
  
  return(
    <>
      <Parts course={props.curses}></Parts>     
    </>      
  )
}
export default Course
