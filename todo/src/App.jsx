import { useState  } from 'react'
import{ TodoContextProvider } from './context/TodoContext'
import { useEffect } from 'react'
import Todoform from './Component/Todoform'
import TodoItem from './Component/TodoItem'


function App() {

  const [todos,setTodos]=useState([])
 
  const addTodo=(todo)=>{
    setTodos(prev=>[...prev,{id:Date.now() ,todo,completed:false}])
  }
  const updateTodo=(id,todo)=>{
    // supposing todo is a string not an object
    if (todo == "")  alert("you typed nothing") 
    else { setTodos(prevTodos=>prevTodos.map((prevTodo)=> prevTodo.id == id ?  {...prevTodo, todo: todo} : prevTodo))}
  } 
  const deleteTodo=(id)=>{
    setTodos(prev=>prev.filter((prevtodo)=>prevtodo.id != id))
  }
  const toggleComplete=(id)=>{
    setTodos(prev=>prev.map((prevtodo)=>prevtodo.id == id ? {...prevtodo, completed : !prevtodo.completed }: prevtodo))
  }
  useEffect(()=>{
  const todos= JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0 )
  {setTodos(todos)}
  },[])
  // this one will be loading on the first load of the page  if local storage have values 
  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]
  )


  // beware the upper line and this setTodos(prev=>prev.map((prevtodo)=>prevtodo.id == id ? {...prevtodo completed : !prevtodo.completed} : prevtodo))
//  the first one mutate the object itseld whilst this approach createes a new object

  return (
    <div className='w-1/2 m-auto mt-7'>
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} >
    <Todoform/>
    { 
      todos.map((todo)=> (
        <div
        className='mt-2'
        key={todo.id}>
            <TodoItem todo={todo}/> 
        </div>
      ))

    }

    </TodoContextProvider>
    </div>
  )
}

export default App
