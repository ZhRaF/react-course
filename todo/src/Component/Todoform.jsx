import React from 'react'
import { useState } from 'react'
import useTodoContext from '../context/TodoContext'

function Todoform() {
    const[todo,setTodo]=useState("")
    const {addTodo}=useTodoContext()
    const add =(e)=>{
      e.preventDefault()
      if(todo != "") 
         { addTodo(todo)
           setTodo("")
          }          
    }
    
  return (
    <form className="mb-6 flex shrink-0" 
    onSubmit={add}>
   <input 
    type="text" 
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    placeholder='add a new task'
    className=" flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
    </input>
    <button 
    className='bg-red p-3 w-28 text-white bg-green-500 border-green-400'
    type='submit'>add</button>
    </form>
  )
}

export default Todoform