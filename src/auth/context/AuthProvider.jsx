import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const initialState = {
  logged: false,
}

const AuthProvider = ({ children }) => {

  const [ state, dispatch] = useReducer( authReducer, initialState)

  return (
    <AuthProvider.Provider value={{ }}>
      {children}
    </AuthProvider.Provider>
  )
}

export default AuthProvider