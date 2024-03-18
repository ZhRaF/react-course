import  { Children, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({children,authentication=true}) {
   const navigate=useNavigate()
   const status= useSelectore((state)=>state.status)
   const [loader, setLoader] = useState(true)

   useEffect(() => {
    if(authentication && status !== authentication)
      {navigate('/login')}
    if(!authentication && status!==authentication )
      {navigate('/')}

      setLoader(false)
   }, [authentication,status,navigate])
   
  return loader ? null  : <>{children}</>
}

export default Protected
// The loader state is used to wait for the useEffect hook
//  to complete its logic before rendering the child components (children)