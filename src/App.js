import React, {useState} from 'react';
import TodoItem from "./components/TodoItem";

//variables

function App() {
  const [todos, setTodos] = useState([
    "Finish plus project",
    "Feed peggypeggy",
    "Sleep",
  ]);




//template
  return ( 
  <div>
    <h1>My to do list</h1>
    {todos.map((todo, index)=> (
      <TodoItem todo={todo} key={index}/>
    ))}
  </div>
  );
}

export default App;