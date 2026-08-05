import { motion } from 'framer-motion'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import Skills from '../components/Skills/Skills.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Experience from '../components/Experience/Experience.jsx'
import Certificates from '../components/Certificates/Certificates.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import GithubSection from '../components/GithubSection/GithubSection.jsx'
import Resume from '../components/Resume/Resume.jsx'
import Contact from '../components/Contact/Contact.jsx'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Testimonials />
      <GithubSection />
      <Resume />
      <Contact />
    </motion.div>
  )
}
