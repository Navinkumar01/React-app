import { useState } from 'react'
import { Todo } from './Todo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import "./Todos.css"

export const Todos = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoDueDate, setTodoDueDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const today = new Date().toISOString().slice(0, 16);
  console.log(today);

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if (todoItem.trim().length === 0) {
      console.error('Empty todo is not allowed')
      return;
    };
    const todo = new Todo(todoItem, todoDueDate);
    const updateTodos = [...todos, todo];
    setTodos(updateTodos);
    setTodoItem("");
    setTodoDueDate(new Date().toISOString());
  }
  const updateTodoItem = (e) => {
    setTodoItem(e.target.value);
  }

  const handleDueDateChange = (e) => {
    setTodoDueDate(e.target.value);
  }

  return (
    <div className='todos'>
      <div className="todos_header">
        <h1 className='todos_title'>TODOS</h1>
      </div>
      <div className="todos_body">
        <ul className='todos-list'>
          {todos.map((todo) => (
            <li 
            key={todo.id}
            className={`"todo-item" ${
              todo.isCompleted ? "todods-item--completed" : ""
            }`}>
              {todo.todo} | {" "}
              <span>{todo.dueDate}</span>
              <button><FontAwesomeIcon icon={faPen}/></button>
              </li>
          ))}
        </ul>
      </div>
      <div className="todos_footer"></div>
      <form className='todos-form' onSubmit={handleTodoSubmit}>
        <input
          type="text"
          name="todo"
          id="uuid"
          placeholder="Enter a todo"
          className="form-control"
          value={todoItem}
          onChange={updateTodoItem}
        />
        <input 
        type="datetime-local" 
        name="dueDate" id="Date" 
        value={todoDueDate} 
        onChange={handleDueDateChange}
        min={today}
        >
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
