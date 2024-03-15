import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
// wiring up

export const store =configureStore({
    reducer:todoReducer, 
    // wiring up
})