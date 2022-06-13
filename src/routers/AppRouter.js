import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../auth/pages/LoginPage';
import DashboardRoutes from './DashboardRoutes';


const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<LoginScreen />} />

        <Route path="/*" element={<DashboardRoutes />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter