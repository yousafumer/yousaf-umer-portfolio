import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <SectionHeading eyebrow="Resume" title="Everything above, in one document" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="glass-card-hover p-8 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-pipeline-gradient text-3xl text-base-950">
          <FiFileText />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="font-display text-lg font-semibold text-ink-100">{profile.name} — Resume</h3>
          <p className="mt-2 text-sm text-ink-500 leading-relaxed">
            A one-page summary of experience, projects, and skills across data analysis and data engineering.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
  href={profile.resumeUrl}
  download="Yousaf_Umer_Resume.pdf"
  className="btn-primary"
>
  <FiDownload />
  Download Resume
</a>
          <Link to="/resume" className="btn-secondary">
            Preview
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
