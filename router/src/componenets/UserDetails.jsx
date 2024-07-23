import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params=useParams()
    const userId=params.userId
  return (
    <div>userDetails of {userId} </div>
  )
}

export default UserDetails