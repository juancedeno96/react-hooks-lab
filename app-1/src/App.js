import React, {useState} from 'react';
import './App.css'
import List from './Components/List'
import AddTodo from './Components/AddTodo'

const App = () =>{
  const [todos, setTodos] = useState([])

function addTodo(task) {
  const newTask = [...todos, task]
  setTodos(newTask)


}
  return(
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      <List todoList={todos}/>
    </div>
  )
}

export default App