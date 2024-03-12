import { useState } from 'react'
import './App.css'
import UserContextProvider from './Components/Context/UserContextProvider'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
       )
}

export default App
