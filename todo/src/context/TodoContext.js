import { createContext,useContext } from "react";

const TodoContext=createContext(
  {  todos:[    {
      id: 1,
      todo: "Todo Message",
      completed: false
   }, {  id: 2,
    todo: "Todo Message2",
    completed: false}
    ],
     addTodo:(todo)=>{},
     updateTodo:(id,todo)=>{},
     deleteTodo:(id)=>{},
     toggleComplete:(id)=>{},

  }
)
// askip le corps des fonctions se fait ou on utilise le provider
export const TodoContextProvider=TodoContext.Provider

export default function useTodoContext (){
    return useContext(TodoContext)
}