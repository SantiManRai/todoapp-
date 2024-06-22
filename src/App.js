import React,{ useState } from 'react';
import './App.css';



const App=()=> 
{
  //define list:
  const [userInput, setUserInput] = useState(" ")
  const [todos, setTodos] = useState([])

  //Add list function
  const addData=()=>
    {
      setTodos([...todos, userInput]);
    }

  return (
    <div >
      <h1>To Do list</h1>
      <input onChange={(event)=> setUserInput([event.target.value])} type='Text'></input>
      <button onClick={()=> addData()}>Add</button>

      <ul>
        {
        todos.map((todo, index)=> <li key={index}>{todo}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
