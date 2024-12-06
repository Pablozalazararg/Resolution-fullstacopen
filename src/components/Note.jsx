const Note = ({note,number, toggleImportance}) => {
  
  return (
    <div>{note} {number} <button onClick={toggleImportance}> Eliminar </button></div>
  )
}

export default Note