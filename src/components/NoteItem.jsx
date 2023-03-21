import { Link } from 'react-router-dom'
function NoteItem(props) {
  const color = props.color;
    
  return (
    <Link to={`/edit/${props.id}`} className='note' style={{backgroundColor:color}}>
        <h3>{props.title}</h3>
        <p>{props.details}</p>
        <p>{props.date}</p>
    </Link>
    
  )
}

export default NoteItem