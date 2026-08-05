import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact/Contact.jsx'

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-32"
    >
      <div className="section !pb-0">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-cyan mb-4 transition-colors">
          <FiArrowLeft /> Back to home
        </Link>
      </div>
      <Contact />
    </motion.div>
  )
}
