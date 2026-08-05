import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-ink-500 max-w-2xl leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
