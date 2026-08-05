import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to move data from raw to reliable"
        subtitle="Organized by where each tool sits in the pipeline — from extraction and modeling to reporting."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: ci * 0.06 }}
            className="glass-card-hover p-6"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-cyan mb-5">
              {cat.title}
            </h3>
            <ul className="space-y-4">
              {cat.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <li key={skill.name} className="group">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-lg text-ink-300 group-hover:text-accent-blue transition-colors">
                        <Icon />
                      </span>
                      <span className="text-sm text-ink-100">{skill.name}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-pipeline-gradient"
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
