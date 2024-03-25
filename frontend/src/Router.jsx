import { Route } from 'react-router-dom'
import React from 'react'
import { Routes } from 'react-router-dom'
import LoginPage from './pages/Login';

function Router() {
    return <Routes>
      <Route path="/" element={<LoginPage />} />
  </Routes>;
}

export default Router