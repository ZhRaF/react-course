import React from 'react'
import { useEffect } from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'
import dbService from '../appwrite/db'
import Container from '../components/container/Container'
import Button from '../components/Button'
import parse from 'html-react-parser'
import { UseSelector, useSelector } from 'react-redux'


function Post() {
  const  [post, setpost] = useState(null)
  const {slug}=useParams()
  const {navigate}=useNavigate()
  const userData = useSelector((state)=>state.auth.UseSelector)
  
  const isAuthor= post && userData ? post.userId === userData.$id : false
// from where getting the post ?  
  const deletePost=  ()=>{
       dbService.deletePost(post.$id).then((status)=>{
        // appwrite method returns a status
        if (status){ 
          dbService.deleteFile(post.featuredImage)
          navigate('/')
        }
       })
  }
   useEffect(() => {
    // from where getting the slug ?
      if(slug){
        dbService.getPost(slug).then((post)=>{
          if (post){
            setpost(post)
          }
          else{
            navigate('/')
          }
        })
      }
   }, [navigate,slug])
   


  return (
    post ? (
      <div className="py-8">
        <Container
        className='w-full flex justify-center mb-4 relative border rounded-xl p-2'
        >
         <img src={dbService.getFilePreview(post.featuredImage)} alt={post.title}
         className='rounded-xl' />
         {isAuthor && (<div className="absolute-right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <Button
              bgColor='bg-green-500'
              className='mr-3'
              > Edit
              </Button>
            </Link>
            <Button
              bgColor='bg-red-500'
              onClick={deletePost}
              > Delete
              </Button>
         </div>
          ) }
         <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <div className="browser-css">
              {parse{post.content}}
            </div>
         </div>
        </Container>
      </div>
    ):null
  )
}

export default Post