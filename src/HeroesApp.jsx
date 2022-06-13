import React from 'react'
import AuthProvider from './auth/context/AuthProvider.jsx'
import AppRouter from './routers/AppRouter'

const HeroesApp = () => {
  return (
    <AuthProvider>

      <AppRouter />

    </AuthProvider>

  )
}

export default HeroesApp