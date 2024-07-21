import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Nav from './componenets/Nav'
import Products from './componenets/Products'
import FeaturedProducts from './componenets/FeaturedProducts'
import NewProducts from './componenets/NewProducts'



function App() {

  return (
    <>
  <Router>
     <Nav/>
    <Routes>
        <Route path="/" element=
        {<>
          <Home/>
          <About/>
         </>}
           />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} >
            <Route index element={<FeaturedProducts/>}  /> 
            <Route path='featured' element={<FeaturedProducts/>} />
            <Route path='new' element={<NewProducts/>}/>
        </Route>

        <Route path="*" element={<h1> page not found </h1>} />
    </Routes>    
  </Router>
    </>
  )
}

export default App
