import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeHeader.css'
import { useAuthStore } from '../stores/auth-store'

const HomeHeader: React.FC = () => {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="home-header">
      <div className="status-bar">
        <span className="time">12:30</span>
        <div className="status-icons">
        </div>
      </div>
      <div className="header-content">
        <div className="profile">
          <div className="avatar" onClick={handleLogout} style={{ cursor: 'pointer' }}>R</div>
          <div className="greeting">
            <span className="hello">Hola, {user?.name}</span>
            <span className="subtitle">Ver más info</span>
          </div>
        </div>
        <div className="header-actions">
          <span className="calendar-icon">📅</span>
          <span className="notifications">🔔</span>
        </div>
      </div>
      
      <div className="level-badge">
        <div className="level-number">4</div>
        <span className="level-text">¡Estás en Nivel 4!</span>
        <span className="level-arrow">›</span>
      </div>
      <div className="tabs">
        <button className="tab active">Cuentas</button>
        <button className="tab">Préstamos</button>
        <button className="tab">Mi negocio</button>
      </div>
    </div>
  )
}

export default HomeHeader