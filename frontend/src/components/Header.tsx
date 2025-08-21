import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="status-bar">
        <span className="time">12:30</span>
        <div className="status-icons">
          <div className="signal-bars"></div>
          <div className="wifi-icon"></div>
          <div className="battery-icon"></div>
        </div>
      </div>
      <div className="header-content">
        <div className="greeting">
          <h2>Beneficios</h2>
        </div>
        <div className="header-actions">
          <span className="level">Nivel <span className="info-icon">ⓘ</span></span>
        </div>
      </div>
      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>
      <div className="category-tabs">
        <button className="category-btn active">Pago de servicios</button>
        <button className="category-btn">Supermercados</button>
        <button className="category-btn">Combustible</button>
      </div>
    </div>
  )
}

export default Header