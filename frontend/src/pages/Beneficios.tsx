import React from 'react'
import Header from '../components/Header'
import PromoCard from '../components/PromoCard'
import BottomNav from '../components/BottomNav'
import './Beneficios.css'

const Beneficios: React.FC = () => {
  return (
    <div className="beneficios">
      <Header />
      <div className="content">
        <div className="limited-time-section">
          <h3 className="section-title">Por tiempo limitado 🔥</h3>
          <PromoCard
            title="Personal Pay Sale"
            subtitle="20% de reintegro"
            description="Viernes, sábado y domingo en Tienda Personal"
            price="Tope: $55.000"
            badge="tienda personal"
          />
        </div>
        
        <div className="level-section">
          <h3 className="section-title">Por tu nivel en junio</h3>
          <div className="level-cards">
            <div className="level-card">
              <div className="level-icon">🎁</div>
              <h4>Reintegro Plus</h4>
              <p className="level-benefit">15% de tu factura</p>
              <p className="level-desc">Todos los meses por ser cliente Personal y/o Flow</p>
              <p className="level-limit">Sin tope</p>
            </div>
            <div className="level-card">
              <div className="level-icon">💳</div>
              <h4>Personal Flow</h4>
              <p className="level-benefit">25% de reintegro</p>
              <p className="level-desc">Todos los días en el pago de tu facturas</p>
              <p className="level-limit">Tope: $7.000</p>
            </div>
          </div>
        </div>

        <div className="coupons-section">
          <h3 className="section-title">¡Pedí tus cupones!</h3>
          <PromoCard
            title="McDonalds"
            subtitle="20% de descuento"
            description="En combo McNífica"
            price=""
          />
        </div>

        <div className="personal-pay-section">
          <h3 className="section-title">Solo por usar Personal Pay</h3>
          <div className="pay-cards">
            <PromoCard
              title="Yaguar"
              subtitle="25% de reintegro"
              description="Todos los días en el total de la compra."
              price="Tope: $3.500"
            />
            <PromoCard
              title="Freddo"
              subtitle="25% de descuento"
              description="Todos los días en 1/4 de helado."
              price="Sin tope"
            />
          </div>
        </div>

        <div className="home-section">
          <h3 className="section-title">Comprá desde tu casa</h3>
          <PromoCard
            title="Día online"
            subtitle="15% de reintegro"
            description=""
            price="Tope: $3.000"
          />
        </div>

        <button className="discover-more-btn">
          Descubrir más beneficios
        </button>
      </div>
      <BottomNav />
    </div>
  )
}

export default Beneficios