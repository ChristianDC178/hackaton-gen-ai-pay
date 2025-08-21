import React from 'react'
import './BalanceCard.css'

const BalanceCard: React.FC = () => {
  return (
    <div className="balance-card">
      <div className="balance-header">
        <span className="balance-label">Mi dinero</span>
        <div className="balance-controls">
          <span className="toggle-balance">👁</span>
          <span className="balance-change">↗ %</span>
        </div>
      </div>
      <div className="balance-amount">
        <span className="currency">$</span>
        <span className="amount">250.578</span>
        <span className="cents">00</span>
        <span className="arrow">›</span>
      </div>
      
      <div className="action-buttons-integrated">
        <div className="action-btn">
          <div className="btn-icon primary">+</div>
          <span>Ingresar</span>
        </div>
        <div className="action-btn">
          <div className="btn-icon primary">→</div>
          <span>Transferir</span>
        </div>
        <div className="action-btn">
          <div className="btn-icon secondary">💳</div>
          <span>Alias/CVU</span>
        </div>
        <div className="action-btn">
          <div className="btn-icon secondary">💳</div>
          <span>Tarjeta</span>
        </div>
      </div>
      
      <div className="loan-section-integrated">
        <div className="loan-info">
          <span className="loan-label">Préstamo</span>
          <span className="loan-amount">¡Pedí $1.000.000 ahora! 🤑</span>
        </div>
        <button className="loan-btn">Ver más</button>
      </div>
    </div>
  )
}

export default BalanceCard