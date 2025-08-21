import React from 'react'
import './SavingsPromo.css'

const SavingsPromo: React.FC = () => {
  return (
    <div className="savings-promo">
      <div className="savings-content">
        <h3>¡AHORRÁ MÁS!</h3>
        <p>Pagá la luz, ¡sumá para subir de nivel y ahorrar más!</p>
        <button className="savings-btn">Activar ahora ›</button>
      </div>
      <div className="savings-icon">💰</div>
    </div>
  )
}

export default SavingsPromo