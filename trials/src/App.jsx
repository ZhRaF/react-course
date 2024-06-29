import { useState,useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('https://api.restful-api.dev/objects') //this returns a promise we can't directly access the data
    .then(resp=>resp.json()) //we've to use json() to parse data
    .then(data=>console.log(data))
    .catch(error=>console.log('error' + error))

   axios.get('https://api.restful-api.dev/objects').then(resp => console.log(resp.data))
  
   
  }, [])
  

  return (
    <>

    </>
  )
}

export default App
