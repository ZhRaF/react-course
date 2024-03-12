import   { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
const [user,setUser] = useState(null)
return(
<UserContext.Provider value={{user,setUser}}>
    {children}
</UserContext.Provider>
)
}
export default UserContextProvider;


// children are the sub elements of the context provider
// those who are wrapped inside it can use the contewt
//  update it and pass it so others can use it to
// lets think of the context which is also called a store btw
//  as  a central  box for data storage
