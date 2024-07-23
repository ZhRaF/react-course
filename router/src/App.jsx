import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componenets/Home'
// import About from './componenets/About'
const LazyLoading = React.lazy(()=>import('./componenets/About'))
import Contact from './componenets/Contact'
import Nav from './componenets/Nav'
import Products from './componenets/Products'
import FeaturedProducts from './componenets/FeaturedProducts'
import NewProducts from './componenets/NewProducts'
import Users from './componenets/Users'
import UserDetails from './componenets/UserDetails'
import Profile from './componenets/Profile'
import {AuthContextProvider} from './componenets/Auth'
import Login from './componenets/Login'
import ProtectedAuth from './componenets/ProtectedAuth'



function App() {

  return (
    <>
  <Router>
  <AuthContextProvider>
     <Nav/>
    <Routes>
        <Route path="/" element=
        {<>
          <Home/>
          <Contact/>
         </>}
           />
        <Route path="/about" element=
        {
        <React.Suspense fallback='loaaaading...'>
          <LazyLoading/>
        </React.Suspense>
         } 
        />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} >
            <Route index element={<FeaturedProducts/>}  /> 
            <Route path='featured' element={<FeaturedProducts/>} />
            <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='/users' element={<Users/>}>
              <Route path=':userId' element={<UserDetails/>}/>

        </Route>
        
        <Route path="/profile" element={
          <ProtectedAuth> 
            <Profile/>
          </ProtectedAuth>}   />
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<h1> page not found </h1>} />


    </Routes>
    </AuthContextProvider>    
  </Router>
    </>
  )
}

export default App
