import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'authSlice'
// wiring up

export const store =configureStore({
    reducer:{
        auth:authSlice, }
    // wiring up
})
export default store