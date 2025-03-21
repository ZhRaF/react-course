import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function Nav() {
    const navBarStyle = ({isActive})=>{ 
        // this is destructuring 
        return {
            fontWeight : isActive ? 'bold' : 'normal'
        }
        // if not we would've done 
        // const navBarStyle = (data)=>{ 
        //     return {
        //         fontWeight : data.isActive ? 'bold' : 'normal'
        //     }

    }
    const auth= useAuth()
  return (
    <nav>
        <NavLink style={navBarStyle} to='/home'> 
            Home
        </NavLink>
        <NavLink style={navBarStyle} to='/about'> 
            About
        </NavLink>
        <NavLink style={navBarStyle} to='/contact'> 
            Contact
        </NavLink>
        <NavLink style={navBarStyle} to='/products'> 
            products
        </NavLink>
        <NavLink style={navBarStyle} to='/users'> 
            users
        </NavLink>
        <NavLink style={navBarStyle} to='/profile'> 
            profile
        </NavLink>
        {
            !auth.user && <NavLink style={navBarStyle} to='/login'> 
              login
             </NavLink>
        }

    </nav>
  )
}

export default Nav