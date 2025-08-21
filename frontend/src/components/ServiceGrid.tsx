import React from 'react'
import './ServiceGrid.css'

const ServiceGrid: React.FC = () => {
  return (
    <div className="service-grid">
      <div className="service-item">
        <span className="service-icon">📄</span>
        <span className="service-label">Pagar servicios</span>
      </div>
      <div className="service-item">
        <span className="service-icon">📱</span>
        <span className="service-label">Recargar celular</span>
        <span className="service-badge">Nuevo</span>
      </div>
      <div className="service-item">
        <span className="service-icon">📞</span>
        <span className="service-label">Pagar sin contacto</span>
      </div>
      <div className="service-item">
        <span className="service-icon">⋯</span>
        <span className="service-label">Más acciones</span>
      </div>
    </div>
  )
}

export default ServiceGrid