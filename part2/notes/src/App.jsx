import { useState } from "react"
import "./App.css"
import Note from "./components/Note"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  return (
    <div className="card">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  )
}

export default App
