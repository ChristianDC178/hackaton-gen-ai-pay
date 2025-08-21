import React from 'react'
import './VisaPromo.css'

const VisaPromo: React.FC = () => {
  return (
    <div className="visa-promo">
      <div className="visa-logo">VISA</div>
      <div className="visa-text">
        <span>Pagá todo con tu tarjeta física, ¡es gratis!</span>
      </div>
      <button className="visa-btn">Pedir ahora</button>
    </div>
  )
}

export default VisaPromo