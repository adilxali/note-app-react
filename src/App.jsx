import { BrowserRouter, Routes, Route } from "react-router-dom"
import Note from "./pages/Note"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import { useEffect, useState } from "react"


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const pageType = window.location.pathname.split("/")[1];
  const pageTitle = ()=>{
    if(pageType === ""){
      document.title = "Notes App";
  }
}
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    pageTitle();
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
