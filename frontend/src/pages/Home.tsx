import React from 'react'
import HomeHeader from '../components/HomeHeader'
import BalanceCard from '../components/BalanceCard'
import VisaPromo from '../components/VisaPromo'
import ServiceGrid from '../components/ServiceGrid'
import SavingsPromo from '../components/SavingsPromo'
import ServicesSection from '../components/ServicesSection'
import BottomNav from '../components/BottomNav'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <HomeHeader />
      <div className="content">
        <BalanceCard />
        <VisaPromo />
        <ServiceGrid />
        <SavingsPromo />
        <ServicesSection />
      </div>
      <BottomNav />
      
      {/* Pepa Floating Button */}
      <div className="pepa-floating-btn">
        <span className="pepa-emoji">🐷</span>
        <div className="pepa-tooltip">
          <span>¡Hola! Soy Pepa 👋</span>
          <span>Hacé click para chatear</span>
        </div>
      </div>
    </div>
  )
}

export default Home