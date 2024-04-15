import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext(null)

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const login = (user) => {
        setUser(user);
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}