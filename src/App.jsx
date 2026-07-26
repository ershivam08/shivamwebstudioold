import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Pricing from './components/Pricing'
import TechStrip from './components/TechStrip'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bgVoid text-textHi font-inter">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <TechStrip />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
