import React from 'react'
import './Todolist.css'
function Todolist(props) {
  return (
    <ul className='TodoList'>
       {props.children}
    </ul>
  )
}

export default Todolist