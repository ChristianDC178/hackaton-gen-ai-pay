import React from 'react'
import './PepaModal.css'

interface PepaModalProps {
  isOpen: boolean
  onClose: () => void
}

const PepaModal: React.FC<PepaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="pepa-modal-overlay" onClick={onClose}>
      <div className="pepa-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pepa-modal-header">
          <h2>🐷 Pepa</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="pepa-modal-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
    </div>
  )
}

export default PepaModal