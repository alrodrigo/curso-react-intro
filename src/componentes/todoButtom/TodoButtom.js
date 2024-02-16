import React from 'react'
import './TodoButtom.css';
function TodoButtom() {
  return (
    <button 
    className="CreateTodoButton"
    onClick={
      ()=>console.log('le diste click')}
    >+</button>
  )
}

export default TodoButtom