import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiStar
} from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const coverImage = project.images?.[0]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: (index % 6) * 0.06
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-base-900 transition-all duration-500 hover:-translate-y-2 hover:border-accent-cyan/40 hover:shadow-glow ${
        project.featured
          ? 'sm:col-span-2'
          : ''
      }`}
    >
      {/* Featured Badge */}

      {project.featured && (
        <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-pipeline-gradient px-4 py-2 text-xs font-semibold text-base-950 shadow-lg">
          <FiStar size={13} />
          Featured Project
        </div>
      )}

      {/* Image */}

      <Link
        to={`/projects/${project.slug}`}
        className="relative block overflow-hidden"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-base-950 via-base-950/10 to-transparent opacity-80" />

        <img
          src={coverImage}
          alt={project.title}
          loading="lazy"
          className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
            project.featured
              ? 'aspect-[16/8]'
              : 'aspect-[16/10]'
          }`}
        />
      </Link>

      {/* Content */}

      <div className="relative z-20 p-7">

        <div className="mb-5 flex items-center justify-between">

          <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-accent-cyan">

            {project.category}

          </span>

        </div>

        <Link to={`/projects/${project.slug}`}>

          <h3 className="font-display text-2xl font-semibold leading-tight text-ink-100 transition-colors duration-300 group-hover:text-accent-cyan">

            {project.title}

          </h3>

        </Link>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-ink-300">

          {project.shortDescription}

        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="pill"
            >
              {tech}
            </span>
          ))}

        </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

          <div className="flex items-center gap-3">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-ink-300 transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan"
              >
                <FiGithub />
                Source Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-ink-300 transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan"
              >
                <FiExternalLink />
                Live Demo
              </a>
            )}

          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-medium text-accent-cyan transition-all duration-300 group-hover:gap-3"
          >
            View Case Study

            <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
          </Link>

        </div>

      </div>

      {/* Hover Glow */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-cyan/5" />
      </div>

    </motion.article>
  )
}