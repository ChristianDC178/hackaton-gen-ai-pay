import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './BottomNav.css'

const BottomNav: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="bottom-nav">
      <div 
        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        onClick={() => navigate('/')}
      >
        <div className="nav-icon home-icon"></div>
        <span className="nav-label">Inicio</span>
      </div>
      <div className="nav-item">
        <div className="nav-icon wallet-icon"></div>
        <span className="nav-label">Billetera</span>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/beneficios' ? 'active' : ''}`}
        onClick={() => navigate('/beneficios')}
      >
        <div className="nav-icon benefits-icon"></div>
        <span className="nav-label">Beneficios</span>
      </div>
      <div className="nav-item">
        <div className="nav-icon savings-icon"></div>
        <span className="nav-label">Ahorros</span>
      </div>
      <div className="nav-item">
        <div className="nav-icon more-icon"></div>
        <span className="nav-label">Más</span>
      </div>
    </div>
  )
}

export default BottomNav