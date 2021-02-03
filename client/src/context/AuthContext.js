import {createContext} from 'react'

function noop() {

}

export const  AuthContext = createContext({
    token: null, 
    userId: null,
    root: false,
    login:  noop,
    logout: noop,
    isAuthenticated: false
})