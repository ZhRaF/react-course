import React, { useState } from 'react'
import useTodoContext from '../context/TodoContext'

function TodoItem({todo}) {
    const [editable,setEditable]=useState(true)
    const [message,setMessage]=useState(todo.todo)
    const {toggleComplete,updateTodo,deleteTodo }= useTodoContext()
  
    const editTodo=()=>{
        updateTodo(todo.id ,message)
        setEditable(prev=>!prev)
        // why mahssoub we can only edit it once
    }
    return (
    <div
    className={`flex border border-black/10  px-3 py-1.5 sahodow-sm
    gap-x-3 shadow-white/50 duration-300 text-black 
    ${ todo.completed ?  "bg-green-300" : "bg-gray-300"}`}>
    <input 
    type="checkbox" 
    className='cursor-pointer'
    checked={todo.completed}
    onChange={() => toggleComplete(todo.id)}
     />


    <input
     type="text"
     className={`outline-none w-full bg-transparent border-2
      ${editable ? "border-black/5 px-2" :"border-transparent"}`}
     value={message}
     onChange={(e)=> setMessage(e.target.value)}
     readOnly= {!editable}
     
     />



     <button
     
     className={`inline-flex w-16 h-8 text-sm
     botder border-black/10 justify-center items-center
     text-white  bg-gray-50 hover:bg-grap-100 shrink-0
     ${editable ? "bg-green-500 " :"bg-green-800 }"}`
     }
      onClick={()=>{
        if(editable) {editTodo()}
        // he did smth 
        //   flipping the editible state but idk why
         }}
      disabled={todo.completed}>
        
        {  editable ? "edit" : "saved"}    
        {/* if the task is completed we're good
        else we can only edit it for once */}
        </button>


        <button
        className='inline-flex w-16 h-8 bg-red-500 text-sm
        botder border-black/10 justify-center items-center
        text-white  bg-gray-50 hover:bg-grap-100 shrink-0'
        onClick={()=>deleteTodo(todo.id)}>
         delete
        </button>


    </div>
  )
}

export default TodoItem