import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import TodaysSpecials   from './components/TodaysSpecials'
import InteriorBanner   from './components/InteriorBanner'
import Specialities     from './components/Specialities'
import DiningEvents     from './components/DiningEvents'
import FoodBanner       from './components/FoodBanner'
import OurStory         from './components/OurStory'
import ExperienceBanner from './components/ExperienceBanner'
import Footer           from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <TodaysSpecials />
        <InteriorBanner />
        <Specialities />
        <DiningEvents />
        <FoodBanner />
        <OurStory />
        <ExperienceBanner />
      </main>
      <Footer />
    </div>
  )
}
