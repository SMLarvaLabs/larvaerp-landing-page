import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Modules from './components/Modules'
import TechStack from './components/TechStack'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Modules />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
