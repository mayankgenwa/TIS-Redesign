import { MotionConfig } from 'framer-motion'
import useTheme from './hooks/useTheme'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Sports from './components/Sports'
import Rankings from './components/Rankings'
import Community from './components/Community'
import Parents from './components/Parents'
import Enquire from './components/Enquire'
import Footer from './components/Footer'
import MobileApplyBar from './components/MobileApplyBar'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    // reducedMotion="user": Framer Motion skips transform animations for people who ask the OS for less motion
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Sports />
        <Rankings />
        <Community />
        <Parents />
        <Enquire />
      </main>
      <Footer />
      <MobileApplyBar />
    </MotionConfig>
  )
}
