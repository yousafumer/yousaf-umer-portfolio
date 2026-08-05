import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      className="glass-card-hover group flex flex-col overflow-hidden"
    >
      <Link to={`/projects/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-base-700">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 pill">{project.category}</span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link to={`/projects/${project.slug}`}>
          <h3 className="font-display text-lg font-semibold text-ink-100 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-3">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-300 hover:text-accent-blue transition-colors"
            >
              <FiGithub /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-300 hover:text-accent-blue transition-colors"
            >
              <FiExternalLink /> Demo
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="ml-auto inline-flex items-center gap-1 text-accent-cyan hover:gap-1.5 transition-all"
          >
            Read more <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
