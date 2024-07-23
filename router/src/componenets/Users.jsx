import React from 'react'
import { Outlet , useSearchParams} from 'react-router-dom'

function Users() {
    const [searchParams,setSearchParams]= useSearchParams()
    // this will give an object of multiple parameters you get to set
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
        <div>Users</div>
        <Outlet/>
        <button onClick={()=>setSearchParams({filter:'active'})}>active users</button>
        <button onClick={()=>setSearchParams({})}>all users</button>
        {
            showActiveUsers ? <h2>ACTIVE USERS</h2> :  <h2>ALL USERS</h2>  
        }


    </>
  )
}

export default Users