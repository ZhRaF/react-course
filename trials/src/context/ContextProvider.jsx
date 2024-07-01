import { Context } from "./Context"
import { useReducer} from 'react'
import { reducer } from "../reducer/reducer"
import { initialState } from "../reducer/reducer"

export const ContextProvider = ({children})=>{
    const [state, dispatch]= useReducer(reducer,initialState)
    return(<>
    <Context.Provider value={{state,dispatch}}>
     {children}
    </Context.Provider>
    </>)

}