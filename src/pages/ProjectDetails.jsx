import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiTarget,
  FiLayers,
  FiCode
} from 'react-icons/fi'

import { getProjectBySlug } from '../data/projects'

function Section({ icon, title, children }) {
  return (
    <section className="glass-card p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950">
          {icon}
        </div>

        <h2 className="font-display text-2xl font-semibold text-ink-100">
          {title}
        </h2>
      </div>

      {children}
    </section>
  )
}

export default function ProjectDetail() {

  const { slug } = useParams()

  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const cover = project.images?.[0]

  return (

    <motion.main

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      transition={{ duration: .45 }}

      className="pt-28 pb-24"

    >

      <div className="section !pt-0">

        <Link

          to="/"

          className="inline-flex items-center gap-2 text-sm text-ink-500 transition hover:text-accent-cyan"

        >

          <FiArrowLeft />

          Back to Portfolio

        </Link>

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-[1.1fr,.9fr]">

          <div>

            <p className="section-eyebrow">

              {project.category}

            </p>

            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink-100 lg:text-6xl">

              {project.title}

            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-300">

              {project.shortDescription}

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
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
                  className="btn-secondary"
                >
                  <FiExternalLink />
                  Live Demo
                </a>

              )}

            </div>

            <div className="mt-8 flex flex-wrap gap-2">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="pill"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>
                    <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-base-900 shadow-glass"
          >
            <img
              src={cover}
              alt={project.title}
              className="aspect-video w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[1fr,320px]">

          <div className="space-y-8">

            <Section
              icon={<FiTarget />}
              title="Project Overview"
            >
              <p className="leading-8 text-ink-300">
                {project.overview}
              </p>
            </Section>

            <Section
              icon={<FiLayers />}
              title="Business Problem"
            >
              <p className="leading-8 text-ink-300">
                {project.businessProblem}
              </p>
            </Section>

            <Section
              icon={<FiCode />}
              title="Engineering Solution"
            >
              <p className="leading-8 text-ink-300">
                {project.solution}
              </p>
            </Section>
                        <Section
              icon={<FiLayers />}
              title="Pipeline Architecture"
            >
              <div className="space-y-5">

                {project.architecture.map((step, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="flex flex-col items-center">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pipeline-gradient font-semibold text-base-950">

                        {String(index + 1).padStart(2, '0')}

                      </div>

                      {index !== project.architecture.length - 1 && (

                        <div className="mt-2 h-10 w-[2px] bg-accent-cyan/30" />

                      )}

                    </div>

                    <div className="pt-2">

                      <p className="text-base font-medium text-ink-100">

                        {step}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </Section>

            <Section
              icon={<FiCode />}
              title="Project Gallery"
            >

              <div className="grid gap-5 md:grid-cols-2">

                {project.images.map((image, index) => (

                  <motion.div

                    key={index}

                    whileHover={{ y: -5 }}

                    className="overflow-hidden rounded-2xl border border-white/10 bg-base-800"

                  >

                    <img

                      src={image}

                      alt={`${project.title} ${index + 1}`}

                      className="aspect-video w-full object-cover transition duration-700 hover:scale-105"

                    />

                  </motion.div>

                ))}

              </div>

            </Section>
                        <Section
              icon={<FiTarget />}
              title="Challenges & Key Learnings"
            >
              <div className="grid gap-8 lg:grid-cols-2">

                <div>

                  <h3 className="mb-4 text-lg font-semibold text-ink-100">
                    Challenges
                  </h3>

                  <ul className="space-y-3">

                    {project.challenges.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-3 text-ink-300"
                      >

                        <span className="mt-2 h-2 w-2 rounded-full bg-accent-cyan" />

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="mb-4 text-lg font-semibold text-ink-100">
                    Key Learnings
                  </h3>

                  <ul className="space-y-3">

                    {project.learnings.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-3 text-ink-300"
                      >

                        <span className="mt-2 h-2 w-2 rounded-full bg-accent-blue" />

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </Section>

          </div>

          <aside className="sticky top-28 h-fit">

            <div className="glass-card p-6">

              <h3 className="mb-6 font-display text-xl font-semibold text-ink-100">
                Technology Stack
              </h3>

              <div className="flex flex-wrap gap-2">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="pill"
                  >
                    {tech}
                  </span>

                ))}

              </div>
                            <div className="mt-8 border-t border-white/10 pt-8">

                <h3 className="mb-5 font-display text-xl font-semibold text-ink-100">
                  Project Links
                </h3>

                <div className="space-y-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary w-full justify-center"
                    >
                      <FiGithub />
                      View GitHub Repository
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      <FiExternalLink />
                      Open Live Demo
                    </a>
                  )}

                </div>

              </div>

              <div className="mt-8 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-5">

                <p className="text-sm leading-7 text-ink-300">

                  Every project in this portfolio focuses on solving real-world
                  data engineering and analytics problems using scalable,
                  maintainable and production-inspired architecture.

                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </motion.main>

  )

}