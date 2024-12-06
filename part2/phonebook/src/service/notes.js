import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = noteObject => {
  return axios.post(baseUrl, noteObject)
}

const update = (id, noteObject) => {
  return axios.put(`${baseUrl}/${id}`, noteObject)
}

const eliminate = id => {
  return  axios.delete(`http://localhost:3001/persons/${id}`)
}

export default { getAll, create, update, eliminate}