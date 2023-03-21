import { BrowserRouter, Routes, Route } from "react-router-dom"
import Note from "./pages/Note"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import dummynote from "./dummy"
import { useEffect, useState } from "react"

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
   <main id="app">
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Note  notes={notes}/>} />
    <Route path="/create" element={<CreateNote setNotes={setNotes}/>} />
    <Route path="/edit/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
   </Routes> 
   </BrowserRouter>
   </main>
  )
}

export default App
