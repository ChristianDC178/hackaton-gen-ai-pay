import React from 'react'
import './PromoCard.css'

interface PromoCardProps {
  title: string
  subtitle: string
  description: string
  price: string
  badge?: string
  image?: string
}

const PromoCard: React.FC<PromoCardProps> = ({ title, subtitle, description, price, badge, image }) => {
  return (
    <div className="promo-card">
      {badge && <div className="promo-badge">{badge}</div>}
      <div className="promo-content">
        <div className="promo-image">
          {image ? <img src={image} alt={title} /> : <div className="placeholder-image"></div>}
        </div>
        <div className="promo-info">
          <h3 className="promo-title">{title}</h3>
          <p className="promo-subtitle">{subtitle}</p>
          <p className="promo-description">{description}</p>
          <p className="promo-price">{price}</p>
        </div>
      </div>
    </div>
  )
}

export default PromoCard