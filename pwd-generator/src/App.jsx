import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
const [length,setLength]=useState(8)
const [numberAllow,setNumberAllow]=useState(false)
const [charAllow,setCharAllow]=useState(false)
const [password,setPassword]=useState('')

const pwdRef=useRef(null)
const generatePwd=useCallback(()=>{
  let pwd=''
  let data='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const char = '!@#$%^&*()-_=+[{]}|;:,<.>?/';
  const number='0123456789';
  
  numberAllow ? data += number : data 
  charAllow ? data += char : data

  for (let i=0;i<length;i++){
   let position = Math.floor(Math.random() * data.length)
   pwd += data.charAt(position)
  }
  setPassword(pwd)
},[numberAllow,charAllow,length])

const copyPassword=()=>{
  window.navigator.clipboard.writeText(password)
  pwdRef.current?.select()
}

useEffect(()=>{
  generatePwd()
},[charAllow,numberAllow,length])
  return (
    <>
       <div className='bg-gray-300 rounded-sm flex  flex-col items-center my-12 mx-3 py-4' >
           <h1 className='font-bold text-green-800 m-4 uppercase'>password generator</h1>
           <div className='flex rounded-md overflow-hidden '>
               <input className='w-96 outline-none  bg-white h-9 p-4 placeholder-green-600' value={ password } readOnly placeholder='password' ref={pwdRef}/>
               <button className='bg-red-500  text-white px-2' onClick={copyPassword}>copy</button>
           </div>
           <div className='flex items-center my-2 gap-x-2 '>
              <input 
              className='appearance-none bg-green-700 w-30 h-3 mx-1  rounded-full cursor-pointer'
              type="range"
              name="range" 
              id="" 
              min={8}
              max={30}
              value={length}
              onChange={(e)=>setLength(e.target.value) }
              />
            <label htmlFor="range"> length : {length}</label>

              <input 
              className=''
              type="checkbox"
              defaultChecked={numberAllow}
              name="number" 
              id="" 
              value={numberAllow}
              onChange={()=>setNumberAllow((prev)=>!prev) }
              />
            <label htmlFor="number"> number </label>

            <input 
              className=''
              type="checkbox"
              defaultChecked={charAllow}
              name="char" 
              id="" 
              value={charAllow}
              onChange={()=>setCharAllow((prev)=>!prev) }
              />
            <label htmlFor="char"> character </label>

           </div>
       </div>
    </>
  )
}

export default App
