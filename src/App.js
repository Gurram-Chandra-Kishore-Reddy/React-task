import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ReturnList from './ReturnList';
function App() {
const baseURL = 'https://jsonplaceholder.typicode.com/todos';
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);
useEffect(() => {
  axios
    .get(baseURL)
    .then((response) => setTodos(response.data));
}, []);
const onUpdateTodo = (todo) => {
axios.put(baseURL + "/" + todo.id, {...todo,completed: !todo.completed})
.then((res) => {const todoindex = todos.findIndex((x) => x.id === todo.id);
                const newTodos = [...todos];
                newTodos[todoindex] = res.data
                setTodos(newTodos)});
};
const onDeleteTodo = (todo) => {
axios.delete(baseURL + "/" + todo.id)
.then(() => {
  const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
  const newTodos = [...todos];
  newTodos.splice(todoItemIndex, 1);
  setTodos(newTodos);
});
};
const onCreateTodo = () => {
    
  if(todo !== "")
  {
    axios
      .post(baseURL, {
        userId: 1,
        id: todos.length + 1,
        title: todo,
        completed: false
      })
      .then(response => {
        const newTodos = [...todos];
        newTodos.push(response.data);
        setTodos(newTodos);
      })
      .finally(() => setTodo(''));
  }
}
  return (
    <React.Fragment>
      <div className='title-input-button'>
        <h1 className='todo-heading'>Todos</h1>
        <div className='row offset-md-4'>
          <input className="input" placeholder='Todo' onChange={e => setTodo(e.target.value)} value={todo}/>
          <button onClick={onCreateTodo} className='add-todo btn btn-primary'>Add Todo</button>
        </div>
      </div>
      <div className='row offset-md-4 mydiv'> 
        <div>
          <ReturnList todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo}/>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
