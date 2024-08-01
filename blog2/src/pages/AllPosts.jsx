import dbService from '../appwrite/db'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import { useEffect,useState } from 'react'

function AllPosts() {
  const [posts, setposts] = useState([])
 useEffect(() => {
    dbService.getPosts([]).then((reply)=>{
      if (reply)   setposts(reply.documents)
      })
  }, [posts])
     if (posts.length ===0 ){
      return(<h3>no post is available yet</h3> )
     }
  return (
    <div className='py-6'>
    <Container>
     <div className="flex-wrap flex">
     {posts.map((post)=>(
    <div className="p-2 w-1/4" key={post.$id}>
        <PostCard {...post} />
    </div>
    ))}
     </div>
      </Container>
    </div>
  )
}

export default AllPosts