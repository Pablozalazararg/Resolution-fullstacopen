import axios from "axios";
import Note from "./Note";
import noteService from '../service/notes'

const Person = ({persons,setPerson}) => {
  const toggleImportanceOf = (id, name) => {
    console.log(name)
    if(window.confirm(`Delete ${name} ?`)){
      console.log(`este es el id a eliminar ${id}`)
      const person = persons.filter((n) => n.id !== id)    
    noteService
      .eliminate(id)
      .then(setPerson(person))
      .catch(error => {
        console.log('fail')
      })

    }
    
  }
  return(
    <div>{persons.map(note=>
      <Note note={note.name} number={note.number} key={note.name} 
      toggleImportance={() => toggleImportanceOf(note.id,note.name)}></Note>
    )}</div>

  )
}

export default Person;