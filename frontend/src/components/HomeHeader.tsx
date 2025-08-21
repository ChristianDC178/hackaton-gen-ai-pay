import React from 'react'
import './HomeHeader.css'

const HomeHeader: React.FC = () => {
  return (
    <div className="home-header">
      <div className="status-bar">
        <span className="time">12:30</span>
        <div className="status-icons">
          <div className="signal-bars"></div>
          <div className="wifi-icon"></div>
          <div className="battery-icon"></div>
        </div>
      </div>
      <div className="header-content">
        <div className="profile">
          <div className="avatar">R</div>
        </div>
        <div className="header-actions">
          <span className="level">Nivel <span className="info-icon">ⓘ</span></span>
          <span className="notifications">🔔</span>
        </div>
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