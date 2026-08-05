import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile.js'
import PipelineFlow from '../shared/PipelineFlow.jsx'

function useTypingEffect(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      }, deleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-accent-blue/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[120px]" />
      </div>

      <div className="section grid lg:grid-cols-[1.15fr,0.85fr] gap-14 items-center py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-eyebrow">Data Engineer · Data Analyst · Karachi, Pakistan</p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink-100">
            Hi, I'm {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}
          </h1>

          <div className="mt-3 h-10 sm:h-12">
            <span className="font-display text-2xl sm:text-3xl gradient-text">{typed}</span>
            <span className="inline-block w-[2px] h-6 sm:h-8 bg-accent-cyan align-middle ml-1 animate-pulse" />
          </div>

          <p className="mt-6 max-w-xl text-ink-300 leading-relaxed">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <a href={profile.resumeUrl} download className="btn-secondary">
              Download Resume
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5 text-ink-500">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-cyan transition-colors text-xl">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-cyan transition-colors text-xl">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent-cyan transition-colors text-xl">
              <FiMail />
            </a>
            <a href={`tel:${profile.phone}`} aria-label="Phone" className="hover:text-accent-cyan transition-colors text-xl">
              <FiPhone />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto animate-float">
            <div className="absolute inset-0 rounded-full bg-pipeline-gradient opacity-30 blur-2xl" />
            <div className="absolute inset-0 rounded-full p-[3px] bg-pipeline-gradient">
              <div className="w-full h-full rounded-full bg-base-800 flex items-center justify-center overflow-hidden glass-card">
                <span className="font-display text-6xl sm:text-7xl font-bold gradient-text">YU</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section pt-4 pb-0">
        <PipelineFlow className="w-full h-auto opacity-70" />
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-500 hover:text-accent-cyan animate-bounce"
        aria-label="Scroll to About"
      >
        <FiArrowDown size={22} />
      </button>
    </section>
  )
}
