export const initialState = {arr:['first']}
export const reducer = (state,action)=>{
    switch (action.type){
    case 'ADD':
    return {arr:[...state.arr,action.payload]} 
    default:
        return state


}
}