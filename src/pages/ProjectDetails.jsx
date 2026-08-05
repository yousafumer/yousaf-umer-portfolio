import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import { getProjectBySlug } from '../data/projects.js'

function Block({ title, children }) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-semibold text-ink-100 mb-3">{title}</h2>
      {children}
    </div>
  )
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-32 pb-24"
    >
      <div className="section !pt-0">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-cyan mb-8 transition-colors">
          <FiArrowLeft /> Back to home
        </Link>

        <p className="section-eyebrow">{project.category}</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink-100 mb-4">{project.title}</h1>
        <p className="text-ink-500 max-w-2xl mb-8">{project.summary}</p>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <FiGithub /> GitHub Repository
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>

        <div className="aspect-video w-full rounded-2xl overflow-hidden glass-card mb-14">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid lg:grid-cols-[1fr,0.6fr] gap-14">
          <div>
            <Block title="Overview">
              <p className="text-ink-300 leading-relaxed">{project.overview}</p>
            </Block>

            <Block title="Business Problem">
              <p className="text-ink-300 leading-relaxed">{project.businessProblem}</p>
            </Block>

            <Block title="Solution">
              <p className="text-ink-300 leading-relaxed">{project.solution}</p>
            </Block>

            <Block title="Architecture">
              <ul className="space-y-2">
                {project.architecture.map((step, i) => (
                  <li key={i} className="flex gap-3 text-ink-300 text-sm leading-relaxed">
                    <span className="font-mono text-accent-cyan">{String(i + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Block>

            {project.screenshots?.length > 0 && (
              <Block title="Screenshots">
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} className="rounded-xl glass-card" loading="lazy" />
                  ))}
                </div>
              </Block>
            )}

            <Block title="Challenges">
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-3 text-ink-300 text-sm leading-relaxed">
                    <span className="text-accent-blue">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Lessons Learned">
              <p className="text-ink-300 leading-relaxed">{project.lessonsLearned}</p>
            </Block>

            <Block title="Future Improvements">
              <ul className="space-y-2">
                {project.futureImprovements.map((f, i) => (
                  <li key={i} className="flex gap-3 text-ink-300 text-sm leading-relaxed">
                    <span className="text-accent-blue">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit glass-card p-6">
            <h3 className="text-xs font-mono uppercase tracking-wide text-ink-500 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologiesUsed.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
            <h3 className="text-xs font-mono uppercase tracking-wide text-ink-500 mb-4">Category</h3>
            <p className="text-sm text-ink-100 mb-6">{project.category}</p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-center">
                <FiGithub /> View Repository
              </a>
            )}
          </aside>
        </div>
      </div>
    </motion.article>
  )
}
