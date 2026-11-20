import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Hobbies from './components/Hobbies.jsx'
import Hero from './components/Hero.jsx'
import Interests from './components/Interests.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setShowScrollTop(window.scrollY > 560)
    window.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Interests />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <button
        className={`scroll-top${showScrollTop ? ' scroll-top--visible' : ''}`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}