import React from 'react'
import { Link } from 'react-router-dom'
function NoteItem(props) {
  return (
    <Link to={`/edit/${props.id}`} className='note'>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
    </Link>
    
  )
}

export default NoteItem