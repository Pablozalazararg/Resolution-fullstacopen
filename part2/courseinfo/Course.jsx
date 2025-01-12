const Header = (props) => {
  return (
    <h1>{props.nombre}</h1>
  )
}
const Part = (props) => {  
  return (
    <li>{props.name} {props.exercises}</li>
  )
}
const Content = (props) => {
  const listItem = props.part.map(elemento=>{return <Part key={elemento.id}  name={elemento.name} exercises={elemento.exercises}></Part>}) 
  return (
    <div>
      {listItem}
    </div>
  )
}
const Total = (props) => {
  let suma=0
  props.total.forEach(elemento=>suma+=elemento.exercises)
  return (
    <p>el total de ejercicios es {suma}</p>
  )
}
const Course = ({course}) => {
  return (
    <div>
      <Header nombre={course.name}></Header>
      <Content part={course.parts} ></Content>
      <Total total={course.parts}></Total>
    </div>
  )

}
export default Course
