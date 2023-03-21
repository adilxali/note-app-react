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
  const colors = [
    '#4E4ACE', '#4EB0B1', '#1B1ABA', '#41309D', '#915F5A', '#6112F2',
  '#A93F9E', '#613C6D', '#DF58A9', '#199A7F', '#E3A7FA', '#09D7B3',
  '#E680EB', '#72B1E5', '#A83D79', '#3E72E6', '#A3B325', '#ECED1D',
  '#CDA888', '#E23282', '#57545E', '#1A20AA', '#8E1C14', '#F59FAA',
  '#E12E24', '#7723F6', '#28FD27', '#2D90EA', '#167CB9', '#6A332B',
  '#B56A77', '#6BCA28', '#68F125', '#FA37DA', '#08C8FB', '#4DEE96',
  '#EA1C41', '#122D56', '#08DC16', '#5061E0', '#35E35F', '#11AE70',
  '#DBAD6E', '#3784F7', '#3B237C', '#D91138', '#753547', '#F3B488',
  '#23E46B', '#620299', '#F52E67', '#536713', '#15775B', '#3546F9',
  '#6DED90', '#C05936', '#CB78DA', '#0C5282', '#429755', '#E26FCF',
  '#0C19B0', '#A157BF', '#40676E', '#51D059', '#1DB4BC', '#77EDD4',
  '#9A8EFE', '#B5C915', '#E23546', '#EF6EF4', '#9EF8E6', '#93EA77',
  '#CD44A6', '#DCF254', '#82B36C', '#44F24C', '#06F780', '#5E520D',
  '#14B039', '#F0A5BD', '#6A9061', '#947616', '#C5E679', '#1E7369',
  '#5C08D8', '#B41D21', '#9A216D', '#85926F', '#2CEB8A', '#5A30CB',
  '#5C5942', '#1B5F12', '#A81EE4', '#AF7DE7', '#6B8057', '#704661',
  '#88CF6E', '#D24081', '#0F53A8', '#DC571E',  '#5A7F63','#74E3A7',
  '#D355E1', '#4E9BAD', '#851A75', '#CBFA61', '#3CA808', '#1E0F15',
  '#4E57DB', '#30CCD4', '#5203D2', '#A89D83',  '#0B949C', '#789FEE', 
  '#1EAD16', '#4349CB',  '#2C8773', '#5B4D8B', '#BBEE99', '#3364D2',
  '#6E4367', '#EC2A4F', '#E452FD', '#EDB1A8',  '#6C2A50', '#16811B', 
  '#63B74F', '#D609CD',  '#CE9299', '#1C742D', '#EAE453', '#73F30B',
  '#C6DD4E', '#2AC47D', '#EEE3CE', '#D06BFC',  '#764DC7', '#D328B0', 
  '#79DC09', '#298C01',  '#C89E0E', '#F64BCA', '#01273A', '#6D5E94',
  '#CF7002', '#B09084', '#3BA97E', '#6DC8D3',  '#5D0CE8', '#1CAF71'
  ]

  const handleSearch = () => {
    const newNotes = notes.filter((note) =>
      note.title.toLowerCase().match(text.toLowerCase())
    );
    setFilteredNotes(newNotes);
  };
  useEffect(handleSearch, (document.title = `React Note App`), [text]);
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
        
          {!showSearch ? 
          <button
          className="btn"
          onClick={() => {
            setShowSearch((prevState) => !prevState);
            setText("");
          }}
        >
          <CiSearch /> </button> :<button
          className="btn"
          onClick={() => {
            setShowSearch((prevState) => !prevState);
            setFilteredNotes(notes);
            setText("");
          }}>  <GrClose color="white" /> </button>}
        

        {!showSearch && (
          <Link to="/create">
            <button className="btn add__btn">
              <BsPlusLg color="white" />
            </button>
          </Link>
        )}
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && <p className="empty__notes"> No Items Found</p>}
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
            color={colors[Math.floor(Math.random() * colors.length)]}
            
          />
        ))}
      </div>
    </section>
  );
}

export default Note;
