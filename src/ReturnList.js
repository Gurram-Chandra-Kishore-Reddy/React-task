const ReturnList = ({ todos,onUpdateTodo, onDeleteTodo}) => {
    return (
          <ul className="list-group">
            {todos.map((todo) => (
                <li className="list-group-item justify-content-between d-flex align-items-center" style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
                {todo.title}
                <div>
                    <input className = "check-box" type="checkbox" checked={todo.completed} onChange={() => onUpdateTodo(todo)}/>
                    <button className="btn btn-sm" onClick={() => onDeleteTodo(todo)}>Delete</button>
                </div>
                
                </li>
            ))}
        </ul>
    );
  };
  
  export default ReturnList;