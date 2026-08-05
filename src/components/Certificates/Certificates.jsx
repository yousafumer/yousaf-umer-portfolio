import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certificates } from '../../data/certificates.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <SectionHeading eyebrow="Certificates" title="Continuous learning, on the record" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-card-hover p-6 flex flex-col"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950 text-xl">
              <FiAward />
            </div>
            <h3 className="font-display text-base font-semibold text-ink-100">{cert.name}</h3>
            <p className="mt-1 text-sm text-accent-cyan">{cert.issuer}</p>
            <p className="mt-1 text-xs font-mono text-ink-500">{cert.date}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {cert.skills.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent-blue hover:text-accent-cyan transition-colors"
              >
                View credential <FiExternalLink />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
