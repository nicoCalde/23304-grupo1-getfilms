import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext ();

async function sleep(n) {
    return new Promise(resolve => setTimeout(resolve, n));
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const login = async (userName,password)=> {
        setLoading(true);

        //TODO fetch login
        // const response = await fetch('/api/login', {userName, password});
        //const user = await res.json();
        // si falla seterror(true)
        
        await sleep(1500);
        const u = {userName, name: 'Nombre Apellido', id: 1234};
        localStorage.setItem('user', JSON.stringify(u));
        setUser(u);
        setLoading(false);
    }

    const logout = async ()=> {
        localStorage.removeItem('user');
        setUser(null);
    }

    const logedIn = ()=> {
        return localStorage.getItem('user') !== null ? true : false;
    }

    const getUser = ()=> {
        if(logedIn())
            return JSON.parse(localStorage.getItem('user'));
        return null;
    }

    const register = async (data)=> {
        setLoading(true);

        //TODO fetch login
        // const response = await fetch('/api/login', data);
        //const user = await res.json();
        // si falla seterror(true)
        
        setLoading(false);

        return true;
    }

    const authObject = {
        user,
        error,
        loading,
        login,
        register,
        logout,
        logedIn,
        getUser
    };

    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export function useAuth() {
    return useContext(AuthContext);
}