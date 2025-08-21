import React from 'react'
import HomeHeader from '../components/HomeHeader'
import BalanceCard from '../components/BalanceCard'
import ActionButtons from '../components/ActionButtons'
import LoanSection from '../components/LoanSection'
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
        <ActionButtons />
        <LoanSection />
        <VisaPromo />
        <ServiceGrid />
        <SavingsPromo />
        <ServicesSection />
      </div>
      <BottomNav />
    </div>
  )
}

export default Home