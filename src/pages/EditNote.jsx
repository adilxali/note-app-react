import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  const handleform = (e) => {
    e.preventDefault();
    if(title && details){
      const newNote = {...note,title,details,date}; 

      const newNotes = notes.map((note) => note.id === id ? newNote : note);
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    navigate("/");
  };


  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleform}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        autoFocus />
        <textarea rows="28" placeholder="Note Details..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
}

export default EditNote;
