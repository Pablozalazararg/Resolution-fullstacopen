import { useState } from "react";
import Note from './components/Note'


const App = () =>{
  const [persons,setPersons] = useState([{name:'Arto Hellas',number:'111222333'}])
  const [newName,setNewName] = useState('')
  const [number,setNumber] = useState('')
  const [newSearch,setNewSearch] = useState('')
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
      setPersons(persons.concat(newObject))
      setNewName('')
      setNumber('')
    }else{
      alert('objeto existente')
      setNewName('')
    }

  }
  const addSearch = (e) =>{
    e.preventDefault()
    let flag=0;
    let numberSearch =0;
    persons.forEach(element=>{if(element.name.toLowerCase() ===newSearch.toLowerCase() ){
      numberSearch=element.number
      flag=1
    }})
    if(flag===1){
      persons.forEach(element=>{if(element.name.toLowerCase() ===newSearch.toLowerCase() ){
        const numeroSearch=1
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
        {persons.map(note => <Note key={note.name} name={note.name} number={note.number}></Note>)}
      </ul>
    </div>
  )


}
export default App;
