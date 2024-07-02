export const initialState = {
    loading : true,
    error:false,
    post:{}
}
export const reducer = (state,action)=>{
    switch (action.type){
    case 'SUCCESS':
    return {
        loading : false,
        error:false,
        post:action.payload
    } 
    case 'FAILURE':
    return {
        loading : false,
        error:true,
        post:{}
        
    }
    default:
        return state
 


}
}