import React from 'react'
import './BottomNav.css'

const BottomNav: React.FC = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item active">
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Inicio</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">💳</span>
        <span className="nav-label">Billetera</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">⚡</span>
        <span className="nav-label">Beneficios</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">⏰</span>
        <span className="nav-label">Ahorros</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">⋯</span>
        <span className="nav-label">Más</span>
      </div>
    </div>
  )
}

export default BottomNav