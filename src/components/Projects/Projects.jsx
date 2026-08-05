import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { categories, projects } from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across the data pipeline"
        subtitle="From raw ingestion to reporting — filter by the layer of the stack you're most interested in."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wide transition-colors border ${
              active === cat
                ? 'bg-pipeline-gradient text-base-950 border-transparent font-semibold'
                : 'border-white/10 text-ink-300 hover:border-accent-cyan/40 hover:text-accent-cyan'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
