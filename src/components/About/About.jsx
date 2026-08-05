import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

const stats = [
  { label: 'Months of professional experience', value: 6, suffix: '' },
  { label: 'Projects shipped', value: 10, suffix: '+' },
  { label: 'Call records analyzed (single project)', value: 5000, suffix: '+' },
  { label: 'Core tools mastered', value: 12, suffix: '+' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-semibold gradient-text">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About" title="Turning raw data into decisions people trust" />

      <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-ink-300 leading-relaxed"
        >
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-xs text-ink-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
