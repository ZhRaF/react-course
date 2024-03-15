import { useSelector } from 'react-redux';
import { removeTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch=useDispatch()

  const remove=(id)=>{
    dispatch(removeTodo(id))
  }
  return (
    <>
      
      {todos.map((todo) => (
        <div 
        className="max-w-sm p-6 mt-2 bg-white border relative
         border-gray-200 rounded-lg shadow text-white
          dark:bg-gray-800 dark:border-gray-700"
         key={todo.id}>
          {todo.text}

          <button
          onClick={()=>remove(todo.id)}
          className='bg-red-400 text-white p-2 rounded-lg border-none absolute  top-1/2
           right-4 transform  -translate-y-1/2'
          >delete</button>
        </div>
      ))}
    </>
  );
}

export default Todos;
