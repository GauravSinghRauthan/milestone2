import { useState } from 'react'
import './App.css'
import Todolist from './components/todolist'

function App() {
  const [todos,setTodos] = useState([])
  const [addTodo,setAddTodo] = useState({status:"pending",task:""})

  const updateSatus = (index)=>{
          const newArr = todos.map((e,i)=>{
            if(index == i){
              return {...e ,status: e.status=="pending"? "completed" : "pending"}
            }
            return e
          })

          setTodos([...newArr])
  }

  const removeTodo = (index) => {
    const newArr = todos.filter((e,i)=>{
      if(index!=i){
        return e
      }
    })

    setTodos([...newArr])
  }

  

  return (
    <div id='TodoContainer'>
      <div id='TaskInput'>
            <input type="text" onChange={e=>setAddTodo({...addTodo,task: e.target.value})} placeholder='plz enter ur todo'/>
            <button onClick={()=>setTodos([addTodo,...todos])}>ADD</button>
      </div>
      <div id='divWrapper'>
        {todos.map((e,i)=>{
            <Todolist e={e} i={i} updateSatus={updateSatus} removeTodo={removeTodo}/>}
          )}
        
      </div>
      
    </div>
  )
}

export default App
