import { useState } from "react"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  const handleSubmit = (newName, event) => {
    event.preventDefault()
    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons([...persons, { name: newName }])
    setNewName("")
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={(e) => handleSubmit(newName, e)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
      <hr />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
