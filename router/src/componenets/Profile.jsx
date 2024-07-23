import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Profile() {
    const navigate = useNavigate()
    const auth = useAuth()
    const handleLogout = ()=>{
        auth.logout()
        navigate('/',{replace:true})
    }
  return (
    <>
    
    <p>welcome user</p>
    <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default Profile