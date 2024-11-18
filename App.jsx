

const Header = (props) =>{
  return(
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Part = (props) => {
  return(
    <>
      <p>{props.part} con {props.number}</p>
    </>
    
  )
}
const Content = (props) => {
  const listPart = props.course.parts.map(element =>{ return <Part key={element.exercises} part={element.name} number={element.exercises}/>} )
  return(
    <>
      {listPart}
    </>
  )
}
const Total = (props) =>{
  let total = 0
  props.course.parts.forEach(element=>total+=element.exercises)
  return(
    <>
      <p>el numero de ejercicios total es {total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}></Total>
      
    </div>
  )
}

export default App
