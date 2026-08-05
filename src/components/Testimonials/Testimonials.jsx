import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/testimonials.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionHeading eyebrow="Testimonials" title="What it's like to work together" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`glass-card p-6 flex flex-col ${t.isPlaceholder ? 'border-dashed' : ''}`}
          >
            <div className="flex gap-1 text-accent-cyan mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FiStar key={idx} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-ink-300 leading-relaxed flex-1">"{t.text}"</p>
            {!t.isPlaceholder && (
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink-100">{t.name}</span>
                <span className="text-xs font-mono text-ink-500">{t.country}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
