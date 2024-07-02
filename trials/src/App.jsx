import { useReducer,useEffect } from 'react'
import axios from 'axios'
import { reducer } from './reducer/reducer'
import './App.css'
import { initialState } from './reducer/reducer'

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(
      (resp)=>{
        dispatch({type:'SUCCESS',payload:resp.data})})
    .catch(()=>{
      dispatch({type:'FAILURE'})
    })
  }
  
  , [])
  
  return (
    <>
    <div>
      {state.loading? '...loading' :'' }
      {state.error? 'sorry something went wrong' :  state.post.title} 
    </div>


    </>
  )
}

export default App
