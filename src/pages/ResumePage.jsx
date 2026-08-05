import { motion } from 'framer-motion'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { experience } from '../data/experience.js'
import { skillCategories } from '../data/skills.js'

export default function ResumePage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="section pt-32 pb-24"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-cyan mb-8 transition-colors">
        <FiArrowLeft /> Back to home
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div>
          <p className="section-eyebrow">Resume</p>
          <h1 className="font-display text-3xl font-semibold text-ink-100">{profile.name}</h1>
          <p className="text-ink-500 text-sm mt-1">Data Engineer · Data Analyst · {profile.location}</p>
        </div>
        <a href={profile.resumeUrl} download className="btn-primary">
          <FiDownload /> Download PDF
        </a>
      </div>

      <div className="glass-card p-8 md:p-12 space-y-12">
        <section>
          <h2 className="font-display text-lg font-semibold text-accent-cyan mb-3">About</h2>
          <p className="text-ink-300 leading-relaxed">{profile.about[0]}</p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-accent-cyan mb-4">Experience</h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.id}>
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-semibold text-ink-100">{item.role}</h3>
                  <span className="text-xs font-mono text-ink-500">{item.period}</span>
                </div>
                <p className="text-sm text-ink-500 mb-2">{item.org}</p>
                <ul className="space-y-1">
                  {item.points.map((p, i) => (
                    <li key={i} className="text-sm text-ink-300 flex gap-2">
                      <span className="text-accent-blue">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-accent-cyan mb-4">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {skillCategories.map((cat) => (
              <div key={cat.id}>
                <h3 className="text-xs font-mono uppercase tracking-wide text-ink-500 mb-2">{cat.title}</h3>
                <p className="text-sm text-ink-300">{cat.skills.map((s) => s.name).join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.section>
  )
}
