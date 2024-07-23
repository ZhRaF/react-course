import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

function Login() {
    const navigate= useNavigate()
    const auth = useAuth()
    const [user,setUser]=useState('')
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    const handleLogin = ()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})

    }
  return (
    <>
    <label htmlFor="">username</label>
    <input type="text" placeholder='username' onChange={(e)=>setUser(e.target.value)}/>
    <button onClick={handleLogin}>login</button>
    </>
  )
}

export default Login