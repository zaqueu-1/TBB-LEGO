import './assets/css/App.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import GiftingSection from './components/GiftingSection.tsx'
import TravelSection from './components/TravelSection.tsx'
import AdultsWelcomeSection from './components/AdultsWelcomeSection.tsx'
import ArtSection from './components/ArtSection.tsx'
import SpaceSection from './components/SpaceSection.tsx'
import PopSection from './components/PopSection.tsx'
import ToddlersSection from './components/ToddlersSection.tsx'
import RealWorldSection from './components/RealWorldSection.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <>
      <Navbar />
      <div className='sections-container'>
        <Hero />
        <GiftingSection />
        <TravelSection />
        <AdultsWelcomeSection />
        <ArtSection />
        <SpaceSection />
        <PopSection />
        <ToddlersSection />
        <RealWorldSection />
      </div>
      <Footer />
    </>
  )
}

export default App
