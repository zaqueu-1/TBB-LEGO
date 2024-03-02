import './App.css'
import GiftingSection from './components/GiftingSection'
import TravelSection from './components/TravelSection'
import AdultsWelcomeSection from './components/AdultsWelcomeSection'
import ArtSection from './components/ArtSection'
import SpaceSection from './components/SpaceSection'
import PopSection from './components/PopSection'
import ToddlersSection from './components/ToddlersSection'
import RealWorldSection from './components/RealWorldSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='sections-container'>
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
