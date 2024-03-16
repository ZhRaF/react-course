import conf from "../conf/conf";
import { Client,Databases,Query,ID,Storage } from "appwrite";

export class DbService{
 client = new Client();
 databases ;
 bucket;

 constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId); 

   this.databases=new Databases(this.client)
   this.bucket=new Storage(this.client)


 }
async getPost(slug){
    try {
    return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId ,slug);
    }
    catch (error) {
     console.log('get post error ')
    throw error
    
}
}

async getPosts(queries=Query.equal('status', "active")){
    try {
        await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            [ queries ]
        );
        
    } catch (error) {
        console.log("error in getposts")
        throw error 
        
    }

}
 async createPost({title,slug,content,featuredImage,status,userId}){
          
    try {
        return await this.databases.createDocument(
            conf.appwriteProjectId,
            conf.appwriteCollectionId,
            slug,
            { title,slug,content,featuredImage,status,userId}
        );
        
    } catch (error) {
        console.log("error in createpost")
        throw error 
        
    }
 }

 async updatePost(slug,{title,content,featuredImage,status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteProjectId,
            conf.appwriteCollectionId,
            slug,
            { title,content,featuredImage,status}
        );
        
    } catch (error) {
        console.log("error in updatepost")
        throw error 
        
    }

 }

 async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteProjectId,
            conf.appwriteCollectionId,
            slug,
        );
        return true

    } catch (error) {
        console.log("error in deleteepost")
        throw error 
        
    }

 }

 async uploadFile(file){
    try { 
      return await  this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,
        );
        
    } catch (error) {
        console.log("error in uploadFile")
        throw error 
        
    }
 }
 async deleteFile(id){
    try { 
      return await  this.bucket.deleteFile(
            conf.appwriteBucketId,
            id,
                   );
        
    } catch (error) {
        console.log("error in uploadFile")
        throw error 
        
    }
 }

 async getFilePreview(id){
   return this.bucket.getFilePreview(conf.appwriteBucketId, id).href
 }
 }

 
const dbService=new DbService()
export default dbService