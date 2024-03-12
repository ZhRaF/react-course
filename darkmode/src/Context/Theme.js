import { createContext, useContext } from "react";
 
export const ThemeContext=createContext({
    themeMode:  "",
    darkTheme: () => {},
    lightTheme: () => {},
//we dont provide the values we just define them unlike previously we defined and gave them in the provideer
})
export const ThemeProvider=ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext)
}
// THIS INSTEAD OF     const {user} = useContext(UserContext)

// THIS IN EVERY COMPOENENT THAT USE THE CONTEXT
