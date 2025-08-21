import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import BalanceCard from '../components/BalanceCard'
import VisaPromo from '../components/VisaPromo'
import ServiceGrid from '../components/ServiceGrid'
import SavingsPromo from '../components/SavingsPromo'
import ServicesSection from '../components/ServicesSection'
import BottomNav from '../components/BottomNav'
import PepaModal from '../components/PepaModal'
import './Home.css'
import { useGetApi } from '../hooks/use-api'

const Home: React.FC = () => {
  const { data } = useGetApi()
  const [isPepaModalOpen, setIsPepaModalOpen] = useState(false)
  console.log(data)

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
      <div className="pepa-floating-btn" onClick={() => setIsPepaModalOpen(true)}>
        <span className="pepa-emoji">🐷</span>
        <div className="pepa-tooltip">
          <span>¡Hola! Soy Pepa 👋</span>
          <span>Hacé click para chatear</span>
        </div>
      </div>
      
      <PepaModal 
        isOpen={isPepaModalOpen} 
        onClose={() => setIsPepaModalOpen(false)} 
      />
    </div>
  )
}

export default Home