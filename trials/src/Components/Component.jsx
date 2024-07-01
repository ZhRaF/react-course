import {useContext} from 'react'
import { Context } from '../context/Context'

function Component() {
    const {state,dispatch}=useContext(Context)
  return (
    <>
    <div className='text-white-500'>Component</div>
    <h1>state is {state.arr}</h1>
}    <button onClick={()=>dispatch({type:"ADD",payload:"tomato"})}>add</button>
    </>
  )
}

export default Component