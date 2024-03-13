import {configureStore} from 'redux-toolkit'
import todoReducer from '..features/todo/todoSlice'
// wiring up

export const store =configureStore({
    reducer:todoReducer, 
    // wiring up
})