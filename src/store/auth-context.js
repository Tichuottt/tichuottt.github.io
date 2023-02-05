import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    },
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storeUserLogIn = localStorage.getItem('isLogin')
        if (storeUserLogIn === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = () => {
        localStorage.setItem('isLogin', '1')
        setIsLoggedIn(true)
    }

    const logoutHandler = (email, password) => {
        localStorage.removeItem('isLogin')
        setIsLoggedIn(false)
    }


    return (
        <AuthContext.Provider value={{isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContext
