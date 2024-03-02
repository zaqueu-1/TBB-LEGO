import './App.css'
import GiftingSection from './components/GiftingSection'
import TravelSection from './components/TravelSection'
import AdultsWelcomeSection from './components/AdultsWelcomeSection'
import ArtSection from './components/ArtSection'
import SpaceSection from './components/SpaceSection'
import PopSection from './components/PopSection'
import ToddlersSection from './components/ToddlersSection'
import RealWorldSection from './components/RealWorldSection'

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
    </>
  )
}

export default App
