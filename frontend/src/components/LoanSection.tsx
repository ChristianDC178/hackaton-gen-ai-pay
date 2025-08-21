import React from 'react'
import './LoanSection.css'

const LoanSection: React.FC = () => {
  return (
    <div className="loan-section">
      <div className="loan-info">
        <span className="loan-label">Préstamo</span>
        <span className="loan-amount">¡Pedí $1.000.000 ahora! 🤑</span>
      </div>
      <button className="loan-btn">Ver más</button>
    </div>
  )
}

export default LoanSection