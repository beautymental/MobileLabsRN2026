import React, {createContext,useContext,useState} from 'react';
const AuthContext=createContext(null);
export function AuthProvider({children}) { const [isAuthenticated,setAuth]=useState(false); return <AuthContext.Provider value={{isAuthenticated,login:(email,password)=>{if(email.trim() && password.trim()){setAuth(true);return true;}return false;},logout:()=>setAuth(false)}}>{children}</AuthContext.Provider>; }
export const useAuth=()=>useContext(AuthContext);
