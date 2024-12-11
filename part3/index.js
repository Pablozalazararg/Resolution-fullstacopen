const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())
const cors = require('cors')

app.use(express.static('dist'))


app.use(cors())
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]
morgan.token("data", (request) => {
  return request.method === "POST" ? JSON.stringify(request.body) : " ";
});
app.use(morgan('tiny'));

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(`<h1>Phonebook has info for 2 people</h1><br/><p>${ Date() }</p>`)
  
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(note => note.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  
  const { name, number } = request.body;
  console.log(name)
  if((name==="")||(number==="")){
    return response.status(400).json({
      error: 'ingreso erroneo1',
    })
  }
  persons.forEach(element=>{if(element.name===name){
    return response.status(400).json({
      error: 'ingreso erroneo2',
      })
    }})
  

  const person = ({
    "id": Math.random(),
    "name": name, 
    "number": number
  });
  persons.concat(person)
  console.log(person)
  response.send(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})