import { createContext, useState } from "react";

export const AuthContext=createContext();
const AuthProvider=({children})=>{
const[selectedProject,setSelectedProject]=useState(null)


return(
    <>
    <AuthContext.Provider
    value={{
        selectedProject,
        setSelectedProject
    }}>{children}

    </AuthContext.Provider>
    </>
)
}
export default AuthProvider;