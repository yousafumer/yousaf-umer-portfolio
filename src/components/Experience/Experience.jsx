import { motion } from 'framer-motion'
import { FiBriefcase, FiCode, FiBookOpen } from 'react-icons/fi'
import { experience } from '../../data/experience.js'
import SectionHeading from '../shared/SectionHeading.jsx'

const ICONS = {
  job: FiBriefcase,
  freelance: FiCode,
  education: FiBookOpen,
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Where the work happened"
        subtitle="A timeline that will keep growing — internships, freelance work, and full-time roles all fit here."
      />

      <div className="relative border-l border-white/10 pl-8 space-y-10">
        {experience.map((item, i) => {
          const Icon = ICONS[item.type] || FiBriefcase
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-base-800 border border-accent-blue/40 text-accent-cyan">
                <Icon size={14} />
              </span>

              <div className="glass-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-base font-semibold text-ink-100">{item.role}</h3>
                  <span className="pill">{item.period}</span>
                </div>
                <p className="text-sm text-accent-cyan mb-3">{item.org}</p>
                <ul className="space-y-1.5">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="text-sm text-ink-500 leading-relaxed flex gap-2">
                      <span className="text-accent-blue">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
