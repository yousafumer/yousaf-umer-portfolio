import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../../data/profile.js'

const topLanguages = [
  { name: 'Python', pct: 45 },
  { name: 'SQL', pct: 30 },
  { name: 'DAX', pct: 15 },
  { name: 'Other', pct: 10 },
]

export default function GithubSection() {
  return (
    <section className="section !pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 grid md:grid-cols-[auto,1fr] gap-8 items-center"
      >
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="h-16 w-16 rounded-full bg-pipeline-gradient flex items-center justify-center text-2xl text-base-950">
            <FiGithub />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-100">github.com/yousafumer</h3>
            <p className="text-sm text-ink-500 mt-1">Data warehouses, ETL pipelines, and scraping tools — shipped in public.</p>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2 !px-5 text-xs">
            Visit profile <FiArrowUpRight />
          </a>
        </div>

        <div>
          <p className="section-eyebrow !mb-3">Top Languages</p>
          <div className="space-y-3">
            {topLanguages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-xs text-ink-500 mb-1 font-mono">
                  <span>{lang.name}</span>
                  <span>{lang.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-pipeline-gradient" style={{ width: `${lang.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-700 font-mono">
            Contribution graph placeholder — connect the GitHub API to render live activity.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
