import React, {useState} from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import "./App.css";


//variables

function App() {
  const [todos, setTodos] = useState([
    "Finish plus project",
    "Feed peggypeggy",
    "Sleep",
  ]);

//methods google anonymous function
const addTodo = (text)=> {
  const newTodos = [...todos, text];
  setTodos(newTodos);
};






//template
  return ( 
  <div className="app">
    <div className="todo-list">
    <h1>My to do list</h1>
    {todos.map((todo, index)=> (
      <TodoItem todo={todo} key={index}/>
    ))}
    <TodoForm addTodo={addTodo}/>
      </div>
  </div>
  );
}

export default App;