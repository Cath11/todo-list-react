import React, {useState} from 'react';
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


//variables

function App() {
  const [todos, setTodos] = useState([
    { text: "Finish plus project", 
    isCompleted: false, },
    {text: "Feed peggypeggy",
    
    isCompleted: false,},
    {text: "Sleep", 
    isCompleted:false, },
  ]);

//methods google anonymous function
const addTodo = (text)=> {
  const newTodos = [...todos, {text}];
  setTodos(newTodos);
};
const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);  
};


const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);  
};

//template
  return ( 
  <div className="app">
    <div className="todo-list">
    <h1>My to do list</h1>
    {todos.map((todo, index)=> (
      <TodoItem todo={todo} index={index} completeTodo={completeTodo}
      removeTodo={removeTodo}
      />
    ))}
    <TodoForm addTodo={addTodo}/>
      </div>
  </div>
  );
}

export default App;