import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Beneficios from './pages/Beneficios'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/beneficios" element={<ProtectedRoute><Beneficios /></ProtectedRoute>} />
        </Routes>
      </Router>
      <div style={{ 
        position: 'fixed', 
        bottom: '10px', 
        right: '10px', 
        background: 'rgba(0,0,0,0.7)', 
        color: 'white', 
        padding: '5px 10px', 
        borderRadius: '5px', 
        fontSize: '12px',
        zIndex: 1000
      }}>
        v1.1 - {new Date().toLocaleString()}
      </div>
    </div>
  )
}

export default App