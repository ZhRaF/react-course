import React from 'react'
import Container from '../container/Container'
import Link from 'react-router-dom'
import Logo from '../Logo'
import LogoutBtn from '../nav/LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { UseSelector } from 'react-redux'
import AuthSlice from '../../store/AuthSlice'

function Header() {
    const authStatus=useSelector((a)=>AuthSlice.authStatus.)
    const navigate=useNavigate()
  return (
    <div>Header</div>
  )
}

export default Header