import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import dbService from '../appwrite/db'
import Container from '../components/container/Container'
import { useEffect } from 'react'
import PostForm from '../components/Post-form/Postform'
function EditPost() {
  const [post, setpost] = useState(null)
  const navigate=useNavigate()
  const {slug}=useParams()

  useEffect(() => {
    if (slug){
      dbService.getPost(slug).then((post)=>{
        if (post)  setpost(post)
        else navigate ('/')
        }
      )
    }
  }, [slug,navigate])
  
  return (
    <div>
      <Container className='py-6'>
        <PostForm post={post}>

        </PostForm>
      </Container>

    </div>
  )
}

export default EditPost