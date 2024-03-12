import  { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
   
    const {setUser} = useContext(UserContext)
//  i think this is to indicate that will be using this value of the 
// context ; check Profile u'll get it
    const handlesubmit = (e)=>{
     
      e.preventDefault();
      setUser({username,password})
//  in here a children is updating the context        
    }
  return (
    <>
    <div>Login</div>
    <input 
    type="text" 
    value={username}
    placeholder='enter your username'
    onChange={e=>setUsername(e.target.value)}
    />

    <input 
    type="text" 
    value={password}
    placeholder='enter your password'
    onChange={e=>setPassword(e.target.value)}
    />

    <button 
    type="submit"
    onClick={handlesubmit}></button>
    
    </>

  )
}

export default Login
// WHY PASSWORD IS NOT SHOWING !!!!!!!!!!!!!!!!!!!!!