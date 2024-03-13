import {createSlice,nanoid} from '@reduxjs/toolkit'
// providin initiial state
const initialState={
    todos:[],
}

// creating the slice
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        // key : value which is the function
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        }
        ,
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((prevtodo)=>prevtodo.id !== action.payload)
        }

    }

})

export const {addTodo,removeTodo}=todoSlice.actions
// to use it along dispatc

export default todoSlice.reducer
// to wire it up to the store