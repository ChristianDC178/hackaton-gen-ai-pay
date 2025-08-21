import React from 'react'
import './HomeHeader.css'

const HomeHeader: React.FC = () => {
  return (
    <div className="home-header">
      <div className="status-bar">
        <span className="time">12:30</span>
        <div className="status-icons">
        </div>
      </div>
      <div className="header-content">
        <div className="profile">
          <div className="avatar">R</div>
          <div className="greeting">
            <span className="hello">Hola, Roberto</span>
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