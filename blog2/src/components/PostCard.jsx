import React from 'react'
import Link from 'react-router-dom'
import dbService from '../appwrite/db'
function PostCard({$id ,title ,featureImage}) {
//we used the $ with id becs thats how it is in appwrite db

// what does feature image exactly represent
  return (
   <Link to={`/post/${$id}`}>
       <div className='w-full bg-gray-100 roundede-xl p-4'>
           <div  className='w-full justify-center mb-4'>
            <img src={dbService.getFilePreview(featureImage)} alt={title} className='rounded-xl'/>
             <h2
             className='text-xl  font-bold'
             >{title}</h2>
           </div>
       </div>
       {/* didnt really understand the src thing in the image also what does feauture image rpresent ? */}
   </Link>
  )
}

export default PostCard