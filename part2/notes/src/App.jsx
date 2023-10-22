import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Note from "./components/Note"

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("A new note…")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data)
    })
  }, [])

  const visibleNotes = showAll ? notes : notes.filter((note) => note.important)

  const addNote = (event) => {
    event.preventDefault()
    if (newNote === "") {
      return
    }
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  return (
    <div className="card">
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {visibleNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
