import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { categories, projects } from '../../data/projects'

import ProjectCard from './ProjectCard'
import SectionHeading from '../shared/SectionHeading'

export default function Projects() {

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {

    if (activeCategory === 'All') {

      return projects

    }

    return projects.filter(

      project => project.category === activeCategory

    )

  }, [activeCategory])

  const featuredProjects = filteredProjects.filter(

    project => project.featured

  )

  const regularProjects = filteredProjects.filter(

    project => !project.featured

  )

  return (

    <section
      id="projects"
      className="section"
    >

      <SectionHeading

        eyebrow="Portfolio"

        title="Engineering Projects"

        subtitle="Production-inspired projects covering modern Data Engineering, Analytics, Business Intelligence, ETL Pipelines, Automation and Data Platforms."

      />

      <div className="mt-12 flex flex-wrap gap-3">

        {categories.map(category => (

          <button

            key={category}

            onClick={() => setActiveCategory(category)}

            className={`rounded-full px-5 py-3 text-sm transition-all duration-300 ${
              activeCategory === category
                ? 'bg-pipeline-gradient text-base-950 font-semibold shadow-glow'
                : 'border border-white/10 text-ink-300 hover:border-accent-cyan hover:text-accent-cyan'
            }`}

          >

            {category}

          </button>

        ))}

      </div>

      {featuredProjects.length > 0 && (

        <div className="mt-20">

          <div className="mb-8 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/10" />

            <span className="section-eyebrow !mb-0">

              Featured Projects

            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <motion.div

            layout

            className="grid gap-8 lg:grid-cols-2"

          >

            <AnimatePresence>

              {featuredProjects.map((project, index) => (

                <ProjectCard

                  key={project.slug}

                  project={project}

                  index={index}

                />

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      )}
            {regularProjects.length > 0 && (

        <div className="mt-20">

          <div className="mb-8 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/10" />

            <span className="section-eyebrow !mb-0">

              More Projects

            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence>

              {regularProjects.map((project, index) => (

                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      )}

      {filteredProjects.length === 0 && (

        <div className="mt-20 glass-card p-12 text-center">

          <h3 className="font-display text-2xl text-ink-100">

            No Projects Found

          </h3>

          <p className="mt-4 text-ink-300">

            No projects are available for this category yet.

          </p>

        </div>

      )}

    </section>
      
  )
}
    