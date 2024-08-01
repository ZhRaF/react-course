import React from 'react'
import { useCallback } from 'react'
import {useForm} from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import Rte from '../Rte'
import Select from '../Select'
import dbService from '../../appwrite/db'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Postform({post}) {
  const {register,handleSubmit,watch,
        setValue,control,getValues}=useForm({defautValues:{
          title :post?.title || "",
          slug:post?.slug || '',
          content:post?.content || '',
          status :post?.status || 'active'
  } })
 const navigate=useNavigate()
 const userData=useSelector((state)=>state.auth.userData)

 const slugTransform =useCallback((slug)=>{
   if (slug && typeof slug === "string")
   return slug.trim().toLocaleLowerCase.replace(/[^a-zA-Z\d\s]+/g,'-').replace(/\s/g,'-')
 },[])

 React.useEffect(()=>{
  watch((value,{name})=>{
    if (name==='title')
        setValue("slug",slugTransform(value.title),{shouldValidate:true})
  })
  //  value are all the state variables of the form , we choose one of them and we treat it under (name)  if that state is title 
 },[watch])

 const submit=async(data)=>{
  if (post){
      const file=data.image[0] ? await dbService.uploadFile(data.image[0]):null
      if (file){
        dbService.deleteFile(post.featuredImage)
      }
      const dbPost = await dbService.updatePost(post.$id,{...data,featuredImage: file ? file.$id:undefined})
      // HNAYA WHY UNDEFINDE WE SHOULD KEEP THE PREVIOUS INSTANCE OF THE FILE §§§§§§
      
      if (dbPost){
        navigate(`/post/${dbPost.$id}`)
      }
  }
  else{
    const file = await dbService.uploadFile(data.image[0])
    if (file){
      const fileId=file.$id
      data.featuredImage=fileId
      const dbPost =await dbService.createPost({...data,userId:userData.$id})
      if (dbPost){
        navigate(`/post/${dbPost.$id}`)
      }
    }
  }
  
 }
 return(
  <form onSubmit={handleSubmit(submit)}
  className='flex flex-wrap'
  >
    <div className="w-2/3 px-2">
      <Input
          label="title"
          placeholder='title'
          className='mb-4'
          {...register('title',{required:true})}

      />
        <Input
      label="slug"
      placeholder='slug'
      className='mb-4'
      {...register('slug',{required:true})}
      onInput={(e)=>{
        setValue("slug",slugTransform(e.currentTarget.value),{shouldValidate:true})
      // try it whilst removing this bcs we hv onchng
      }}
      />
       <Rte
       label="content="
       name="content"
       control={control}
       defaultValue={getValues("content")}
       />
    </div>
    <div className="w-1/3 px-2">
      <Input
      className='mb-4'
      label='featured image'
      type='file'
      accept='image/png , image/jpg, image/jpeg'
      {...register('image',{required:!post})}
      />
      {
        post && ( 
          <div className="w-full mb-4">
             <img src={dbService.getFilePreview(post.featuredImage)} 
             alt={post.title }
             className='rounded-lg'
             />
          </div>
          )
          // didnt understand 
      }
      <Select
       options={['active','inactive']}
       label='Status'
       className='mb-4'
       {...register('status',{required:true})}
      />
      <Button
      type='submit'
      bgColor={post ? 'bg-green-500' : undefined }
      className='w-full'
      > {post ? 'Edit' : 'Submit'}
      </Button>
    </div>
  </form>

 )
}

export default Postform