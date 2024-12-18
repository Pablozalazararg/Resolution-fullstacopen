import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>      

      <h1>add a new</h1>

      <PersonForm persons={persons} setPersons={setPersons}/>
      
      <h2>Numbers</h2>
      <Person persons={persons} setPerson={setPersons}/>
    </div>
  )
}

export default App