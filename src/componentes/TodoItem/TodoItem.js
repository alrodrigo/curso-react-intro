import './Todoitem.css'
function TodoItem(props){
    return (
      <li className="TodoItem">
        <span className={`Icon Icon--check ${props.
          completed && "Icon-check--active"}`}>
          V
          </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}s>{props.text}</p>
        <span className="Icon Icon-delete">X</span>
      </li>
    );
  }
  export default TodoItem