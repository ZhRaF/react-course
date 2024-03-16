import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"

export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId); 
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if (userAccount)
               {
               return userAccount.Login({email,password})
               }
            
        } catch (error) {
            console.log('signup error')
            throw error
            
        }
        
    }

    async Login({email,password}){
         try {
            const emailSession=await  this.account.createEmailSession(email,password)
            return emailSession
         } catch (error) {
            console.log('login error')
            throw error            
         }
    }

    async getCurrentUser(){
        try {
           await this.account.get()
        } catch (error) {
            console.log('getuser error')
            throw error
        }
        return null
    }

    async Logout(){
        try {
           await this.account.deleteSessions()
        } catch (error) {
            console.log('login error')
            throw error
        }
    }
}

const authService=new AuthService()
export default authService