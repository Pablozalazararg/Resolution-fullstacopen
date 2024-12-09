import { useState } from "react";
import noteService from '../service/notes'
import Notification from './Notification'


const PersonForm = ({persons,setPersons}) =>{
  const [newName, setNewName] = useState('')
  
  const [number,setNumber] = useState(0)
  const [message, setMessage] = useState(null)
  const handleNoteChange = (e) =>{
    setNewName(e.target.value.toString())
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const addPersons = (e) =>{
    e.preventDefault()
  let flag = 0
  persons.forEach(element=>{if(element.name===newName){
    flag=1
    setMessage('ya existe el usuarios')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    
  }})
  if(flag==0){
    const noteObject = {
      name:newName,
      number:number

    }
    noteService
    .create(noteObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNumber('')
    })
    .catch(error => {
      console.log('fail')
    })
    
  }else{
    alert(`${newName} es un objeto existente`)
    setNewName('')
    setNumber('')
  } 
}
  return(
    <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          number: <input value={number} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">  add  </button>
        </div>
        <Notification message={message} />
    </form>
  )
}

export default PersonForm;
