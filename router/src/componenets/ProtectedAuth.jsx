import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

function ProtectedAuth({children}) { 
    const auth = useAuth()
    const location = useLocation()
    return !auth.user ? <Navigate to='/login' state={{path:location.pathname}}/> : children
  
}

export default ProtectedAuth