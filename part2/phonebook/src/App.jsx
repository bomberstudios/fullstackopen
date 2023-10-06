import { useState } from "react"
import "./App.css"
import PersonForm from "./PersonForm"
import PeopleList from "./PeopleList"
import Filter from "./Filter"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456789" },
    { name: "Ada Lovelace", number: "456789123" },
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
      <h2>Add person</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <hr />
      <PeopleList persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App
