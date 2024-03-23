import  { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protected({children, authentication = true}) {
   const navigate=useNavigate()
   const authStatus = useSelector((state) => state.auth.status )
   const [loader, setLoader] = useState(true)

   useEffect(() => {
    
    if(authentication && authStatus !== authentication)
      {navigate('/login')}
    if(!authentication && authStatus!==authentication )
    {
      navigate("/")
      console.log("status"+authStatus)
      console.log(authentication)
      console.log("staying the same url , status ,auth")
    }

      setLoader(false)
   }, [authentication,authStatus,navigate])
   
  return loader ? null  : <>{children}</>
}

export default Protected
// The loader state is used to wait for the useEffect hook
//  to complete its logic before rendering the child components (children)