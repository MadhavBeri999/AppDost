import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import DevelopmentProcess from './components/DevelopmentProcess'
import FeaturedProjects from './components/FeaturedProjects'
import OpenSource from './components/OpenSource'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ConsultationModal from './components/ConsultationModal'
import ThemeToggle from './components/ThemeToggle'
import AccessibilityControls from './components/AccessibilityControls'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal')
  const [highContrast, setHighContrast] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('large-text', fontSize === 'large')
    document.documentElement.classList.toggle('high-contrast', highContrast)
  }, [theme, fontSize, highContrast])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onConsultationClick={() => setShowConsultationModal(true)} />
      <Hero onConsultationClick={() => setShowConsultationModal(true)} />
      <Achievements />
      <About />
      <WhatWeDo />
      <WhyChoose />
      <Services />
      <DevelopmentProcess />
      <FeaturedProjects />
      <OpenSource />
      <Technologies />
      <Footer />
      <FloatingButtons />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <AccessibilityControls
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />
      {showConsultationModal && (
        <ConsultationModal onClose={() => setShowConsultationModal(false)} />
      )}
    </div>
  )
}

export default App
