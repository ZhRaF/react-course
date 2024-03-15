import {createSlice,nanoid} from '@reduxjs/toolkit'
// providin initiial state
const initialState={
    todos:[{id:1,text:"kzbdkjsqb"},],
}

// creating the slice
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //( key : value )
        // reducer function
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        }
        // witht the redux toolkit
        ,
        // reducer function

        // actiontype
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((prevtodo)=>prevtodo.id !== action.payload)
        }

    }

})
// 
export const {addTodo,removeTodo}=todoSlice.actions
// to use it along dispatc
// the create slice will automatically generate actions creators
// and here we are exporting them to be used by the components


export default todoSlice.reducer
// to wire it up to the store

// In Redux Toolkit, the createSlice function creates a slice of your Redux store that includes
//  both the reducer function and the associated action creators.
// By exporting these action creators, you can easily use them to 
// dispatch actions in other parts of your application.