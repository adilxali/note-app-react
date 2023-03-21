import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import NoteItem from "../components/NoteItem.jsx";
import { useEffect, useState } from "react";
function Note({ notes }) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    const newNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNotes(newNotes);
  };
  useEffect(handleSearch,
    document.title = `React Note App`
    ,[text])
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keywords..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => {setShowSearch((prevState) => !prevState);setText("")}}
        >
          {!showSearch ? <CiSearch /> : <GrClose color="white"/>}
        </button>
        <button className="btn ">
        <Link to="/create">
        <BsPlusLg color="white"/>
      </Link>
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && <p> No Items Found</p>}
        {filteredNotes.map((notes) => (
          <NoteItem
            key={notes.id}
            title={
              notes.title.length > 50
                ? notes.title.substring(0, 50) + "..."
                : notes.title
            }
            date={notes.date}
            details={notes.details}
            id={notes.id}
          />
        ))}
      </div>
      
    </section>
  );
}

export default Note;
