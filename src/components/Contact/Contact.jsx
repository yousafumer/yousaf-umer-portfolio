import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/yousafumer', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: profile.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to an email service (e.g. Formspree, EmailJS) or your own API endpoint.
    setSent(true)
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something reliable"
        subtitle="Open to Data Analyst and Junior Data Engineer roles, freelance projects, and collaborations."
      />

      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="glass-card-hover p-5 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-accent-cyan text-lg">
                  <Icon />
                </span>
                <div>
                  <p className="text-xs font-mono text-ink-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm text-ink-100">{item.value}</p>
                </div>
              </div>
            )
            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-ink-500 mb-2 uppercase tracking-wide">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-accent-cyan/50 outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-ink-500 mb-2 uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-accent-cyan/50 outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-ink-500 mb-2 uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-accent-cyan/50 outline-none transition-colors resize-none"
              placeholder="Tell me about your project or role..."
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center" disabled={sent}>
            {sent ? <><FiCheck /> Message ready to send</> : <><FiSend /> Send Message</>}
          </button>
          {sent && (
            <p className="text-xs text-ink-500 text-center">
              Connect this form to an email service to deliver messages automatically.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
