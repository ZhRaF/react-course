import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
 function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not logged in </h1>

    return (

    <div>
        <h1>hello {user.username} your password is {user.password} </h1>

    </div>
  )
}

export default Profile