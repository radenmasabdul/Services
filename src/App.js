import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import FaqPage from './pages/Faq'
import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;