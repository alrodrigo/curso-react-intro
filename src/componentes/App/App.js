import TodoCounter from '../todoCounter/TodoCounter';
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoButtom from '../todoButtom/TodoButtom';
import Todolist from '../Todolist/Todolist';
import TodoItem from '../TodoItem/TodoItem';
import React from 'react';
import './App.css'
const defaultTodos= [
  {text: 'Cortar cebolla', completed:true},
  {text: 'tomar el curso de react.js', completed: false},
  {text: 'llorar con la llorona', completed: false},
  {text: 'leer el libro', completed: false},


];
function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoFilter/>

      <Todolist>
      {defaultTodos.map(todo=>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
    
      </Todolist>
      <TodoButtom/>
     
    </React.Fragment>
  );
}

export default App;
