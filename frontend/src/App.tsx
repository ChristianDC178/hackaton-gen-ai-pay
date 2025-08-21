import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Beneficios from './pages/Beneficios'
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beneficios" element={<Beneficios />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App