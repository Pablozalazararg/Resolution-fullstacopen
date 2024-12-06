import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './service/notes'


const App = () =>{
  /*nombre*/
  const [persons,setPersons] = useState([])
  /*nuevo nombre*/
  const [newName,setNewName] = useState('')
  
  const [number,setNumber] = useState('')
  const [newSearch,setNewSearch] = useState('')
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
      
  }, [])
  
  const addName = (e) =>{
    e.preventDefault()
    let flag=0;
    persons.forEach(element=>{if(element.name===newName){
      flag=1
    }})
    if(flag===0){
      const newObject ={
        name:newName,
        number:number
      }
    noteService
    .update(newObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNumber('')
    })
      
    }else{
      alert('objeto existente')
      setNewName('')
    }

  }
  let flag=0;
  let numberSearch =0;
  const addSearch = (e) =>{
    e.preventDefault()
    
    persons.forEach(element=>{if(element.name.toLowerCase() ===newSearch.toLowerCase() ){
      numberSearch=element.number
      flag=1
    }})
    if(flag===1){
      persons.forEach(element=>{if(element.name.toLowerCase() ===newSearch.toLowerCase() ){
        const numberSearch=1
      }})
      alert(`el numero de ${newSearch} es ${numberSearch}`)
      setNewSearch('')
    }

  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
  }
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/persons/${id}`
    axios.delete(url).then(response => {
      setPersons(persons.filter((n) => n.id !== id));
      numberSearch =0;
    })
  }

  return(
    <div>
      <h1>search</h1>
      <form onSubmit={addSearch}>
        <p>Name: </p>
        <input value={newSearch} onChange={handleSearchChange}  ></input>
        <button type="submit">search</button>
      </form>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
        <p>Name: </p>
        <input value={newName} onChange={handleNameChange}  ></input>
        <p>Number: </p>
        <input value={number} onChange={handleNumberChange} type='number' ></input>

        <button type="submit">save</button>
      </form>
      <h1>Numbers</h1>
      <ul>
        {persons.map(note => <Note toggleImportance={() => toggleImportanceOf(note.id)} key={note.name} name={note.name} number={note.number}></Note>)}
      </ul>
    </div>
  )


}
export default App;