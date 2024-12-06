import { useState } from "react"
const Filter = ({persons}) => {
  const[search,setSearch] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  const addSearch = (e) => {
    e.preventDefault()
    let flag = 0
    persons.forEach(element=>{if(element.name===search){
      flag=1
    }})
    if(flag==1){
      alert(`${search} existe `)
      setSearch('')
    }else{
      alert(`${search} no existe`)
      setSearch('')
    }
  }

  return(
    <form onSubmit={addSearch}>
      <div>
        search: <input value={search} onChange={handleSearch}/>
      </div>
      <div>
        <button type="submit">  search  </button>
      </div>
    </form>

  )
  
}
export default Filter;