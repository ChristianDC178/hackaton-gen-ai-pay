import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="status-bar">
        <span className="time">12:30</span>
        <div className="status-icons">
          <span className="signal">📶</span>
          <span className="wifi">📶</span>
          <span className="battery">🔋</span>
        </div>
      </div>
      <div className="header-content">
        <div className="profile">
          <div className="avatar">R</div>
        </div>
        <div className="header-actions">
          <span className="level">Nivel ⓘ</span>
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

export default Header