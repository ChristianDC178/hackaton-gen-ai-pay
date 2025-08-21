import React from 'react'
import './ActionButtons.css'

const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons">
      <div className="action-btn">
        <div className="btn-icon add">+</div>
        <span>Ingresar</span>
      </div>
      <div className="action-btn">
        <div className="btn-icon transfer">→</div>
        <span>Transferir</span>
      </div>
      <div className="action-btn">
        <div className="btn-icon alias">💳</div>
        <span>Alias/CVU</span>
      </div>
      <div className="action-btn">
        <div className="btn-icon card">💳</div>
        <span>Tarjeta</span>
      </div>
    </div>
  )
}

export default ActionButtons