const conf = {
    appwriteUrl:String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjectId:String(process.env.APP_REACT_APPWRITE_ID),
    appwriteDatabaseId:String(process.env.APP_REACT_APPWRITE_DATABSE_ID),
    appwriteCollectionId:String(process.env.APP_REACT_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(process.env.APP_REACT_APPWRITE_BUCKET_ID),

    

}
export default conf

// to make sure the env attributes have the right type