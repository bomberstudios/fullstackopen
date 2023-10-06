import { useState } from "react"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456789" },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [nameFilter, setNameFilter] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if (newName === "" || newNumber === "") {
      alert("Please enter name and number")
      return
    }
    setPersons([...persons, { name: newName, number: newNumber }])
    setNewName("")
    setNewNumber("")
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <h2>Add person</h2>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        Filter shown with:{" "}
        <input
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
      <hr />
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .map((person) => (
          <div key={person.name}>
            {person.name}: {person.number}
          </div>
        ))}
      <hr />
      <div>
        debug: {newName} - {newNumber} / {nameFilter}
      </div>
    </div>
  )
}

export default App
