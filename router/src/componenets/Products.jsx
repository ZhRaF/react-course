import { Link,Outlet } from 'react-router-dom'


function Products() {
  return (
    <>
    <div>Products</div>
    <nav>
        <Link to='featured' >featured</Link>
        <Link to='new' >new</Link>
    </nav>
    <Outlet/>
    </>
    
  )
}

export default Products