import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import useCreateDate from "../components/useCreateDate"
import { v4 as uuidv4 } from "uuid";
function CreateNote({setNotes}) {
  const date = useCreateDate();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
    if(title && details){
      const note = {
        id: uuidv4(),
        title,
        details,
        date,
      }
      setNotes((prevNotes) => [...prevNotes, note]);

      navigate("/");
      setTitle("");
      setDetails("");
    }
    if(!title){
      alert("Title is required");
    }
    if(!details){
      alert("Details is required");
    }

  };
  useEffect(()=>{
    document.title = "Create New Note"
  },[]);
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
}

export default CreateNote;
