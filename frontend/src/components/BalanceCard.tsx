import React from 'react'
import './BalanceCard.css'

const BalanceCard: React.FC = () => {
  return (
    <div className="balance-card">
      <div className="balance-header">
        <span className="balance-label">Ocultar saldo 👁</span>
        <span className="balance-change">↗ %</span>
      </div>
      <div className="balance-amount">
        <span className="currency">$</span>
        <span className="amount">250.578</span>
        <span className="cents">00</span>
        <span className="arrow">›</span>
      </div>
    </div>
  )
}

export default BalanceCard