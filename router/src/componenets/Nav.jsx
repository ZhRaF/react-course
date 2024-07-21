import React from 'react'
import { NavLink } from 'react-router-dom'
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
    </nav>
  )
}

export default Nav