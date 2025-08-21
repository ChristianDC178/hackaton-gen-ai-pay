import React from 'react'
import './ServicesSection.css'

const ServicesSection: React.FC = () => {
  return (
    <div className="services-section">
      <div className="service-card">
        <div className="service-header">
          <span className="service-title">TelePASE</span>
        </div>
        <span className="service-icon">🚗</span>
      </div>
      
      <div className="service-card">
        <span className="service-title">Seguros</span>
        <span className="service-icon">🛡️</span>
      </div>

      <div className="promo-card">
        <div className="promo-number">2</div>
        <div className="promo-content">
          <h4>Sumá $78.896 para Nivel 3</h4>
          <p>Pagá con Visa Personal Pay en sitios online</p>
        </div>
      </div>

      <div className="offer-card natura">
        <div className="offer-content">
          <h4>TODOS LOS DÍAS</h4>
          <h3>20% de descuento en el total de la compra</h3>
          <button>Conocer más ›</button>
        </div>
        <div className="offer-logo">natura</div>
      </div>
    </div>
  )
}

export default ServicesSection