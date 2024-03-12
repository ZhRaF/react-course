import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
const [ counter , setcounter ]= useState(0);
const addCounter = () =>{
   setcounter(counter+1);
   setcounter(counter+3);

}
function removeCounter(){
  setcounter(counter-1);
}
  return (
    <>
      <h3>counter={counter}</h3>
      <button onClick={addCounter}>add</button>{"         "}
      <button onClick={removeCounter}>remove</button>
    </>
  )
}

export default App
