import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,createBrowserRouter, RouterProvider,createRoutesFromElements} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store.jsx'
import {Home} from '../pages/Home.jsx'
import {Login} from '../pages/Login.jsx'
import {Signup} from '../pages/Signup.jsx'
import {AllPosts} from '../pages/AllPosts.jsx'
import {AddPost} from '../pages/AddPost.jsx'
import {EditPost} from '../pages/EditPost.jsx'


import {Protected} from './components/AuthLayout.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login'
             element={
             <Protected authentication={false}>
                  <Login/>
             </Protected>}
      />
      <Route path='Signup'
             element={
             <Protected authentication={false}>
                  <Signup/>
             </Protected>}
      />
      <Route path='all-posts'
             element={
             <Protected authentication >
                  <AllPosts/>
             </Protected>}
      />
      <Route path='edit-post/'>
          <Route path=':slug' 
                element={
                <Protected authentication >
                      <EditPost/>
                </Protected>}
                />
          
      </Route>    
      <Route path='add-post'
             element={
             <Protected authentication >
                  <AddPost/>
             </Protected>}
      />


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
