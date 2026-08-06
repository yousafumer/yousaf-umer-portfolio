import { motion } from 'framer-motion'

import {
  FiArrowLeft,
  FiDownload,
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiExternalLink
} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { profile } from '../data/profile'
import { experience } from '../data/experience'
import { skills } from '../data/skills'

export default function ResumePage() {

  return (

    <motion.main

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      transition={{ duration: .45 }}

      className="min-h-screen bg-base-950 pt-32 pb-24"

    >

      <div className="section">

        <Link

          to="/"

          className="inline-flex items-center gap-2 text-sm text-ink-500 transition hover:text-accent-cyan"

        >

          <FiArrowLeft />

          Back to Portfolio

        </Link>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

            <div>

              <p className="section-eyebrow">

                Professional Resume

              </p>

              <h1 className="mt-4 font-display text-5xl font-bold text-ink-100">

                {profile.name}

              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-9 text-ink-300">

                Data Engineer • Data Analyst • Python Developer

              </p>

            </div>

            <a

              href={profile.resumeUrl}

              download

              className="btn-primary"

            >

              <FiDownload />

              Download Resume

            </a>

          </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            <a

              href={`mailto:${profile.email}`}

              className="glass-card-hover flex items-center gap-4 p-5"

            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950">

                <FiMail size={22} />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-ink-500">

                  Email

                </p>

                <p className="mt-1 text-sm font-medium text-ink-100 break-all">

                  {profile.email}

                </p>

              </div>

            </a>

            <a

              href={`tel:${profile.phone}`}

              className="glass-card-hover flex items-center gap-4 p-5"

            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950">

                <FiPhone size={22} />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-ink-500">

                  Phone

                </p>

                <p className="mt-1 text-sm font-medium text-ink-100">

                  {profile.phone}

                </p>

              </div>

            </a>

            <div

              className="glass-card-hover flex items-center gap-4 p-5"

            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950">

                <FiMapPin size={22} />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-ink-500">

                  Location

                </p>

                <p className="mt-1 text-sm font-medium text-ink-100">

                  {profile.location}

                </p>

              </div>

            </div>

            <a

              href={profile.linkedin}

              target="_blank"

              rel="noreferrer"

              className="glass-card-hover flex items-center justify-between p-5"

            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950">

                  <FiLinkedin size={22} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-ink-500">

                    LinkedIn

                  </p>

                  <p className="mt-1 text-sm font-medium text-ink-100">

                    View Profile

                  </p>

                </div>

              </div>

              <FiExternalLink />

            </a>

          </div>
                    <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,.9fr]">

            <div>

              <span className="section-eyebrow">

                Professional Summary

              </span>

              <h2 className="mt-4 font-display text-4xl font-bold text-ink-100">

                Building data platforms that transform raw information into business value.

              </h2>

              <div className="mt-8 space-y-6 text-lg leading-9 text-ink-300">

                {profile.about.map((paragraph) => (

                  <p key={paragraph}>

                    {paragraph}

                  </p>

                ))}

              </div>

            </div>

            <div className="glass-card p-8">

              <span className="section-eyebrow">

                Core Expertise

              </span>

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-ink-300">

                    Data Engineering

                  </span>

                  <span className="pill">

                    Advanced

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-ink-300">

                    SQL & Data Warehousing

                  </span>

                  <span className="pill">

                    Advanced

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-ink-300">

                    Power BI & Analytics

                  </span>

                  <span className="pill">

                    Advanced

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-ink-300">

                    Python Automation

                  </span>

                  <span className="pill">

                    Advanced

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-ink-300">

                    Web Scraping

                  </span>

                  <span className="pill">

                    Intermediate

                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-20">

            <span className="section-eyebrow">

              Professional Experience

            </span>

            <h2 className="mt-4 font-display text-4xl font-bold text-ink-100">

              Experience

            </h2>

            <div className="mt-10 space-y-8">
                            {experience.map((job) => (

                <div
                  key={job.company}
                  className="glass-card mb-8 p-8"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      <h3 className="font-display text-2xl font-bold text-ink-100">

                        {job.role}

                      </h3>

                      <p className="mt-2 text-lg font-medium text-accent-cyan">

                        {job.company}

                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-sm font-semibold text-ink-300">

                        {job.duration}

                      </p>

                      <p className="mt-1 text-sm text-ink-500">

                        {job.location}

                      </p>

                    </div>

                  </div>

                  <p className="mt-8 text-lg leading-9 text-ink-300">

                    {job.description}

                  </p>

                  <div className="mt-8 space-y-4">

                    {job.highlights.map((point) => (

                      <div
                        key={point}
                        className="flex gap-4"
                      >

                        <span className="mt-2 h-2 w-2 rounded-full bg-accent-cyan" />

                        <p className="flex-1 leading-8 text-ink-300">

                          {point}

                        </p>

                      </div>

                    ))}

                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {job.skills.map((skill) => (

                      <span
                        key={skill}
                        className="pill"
                      >

                        {skill}

                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>
                    <div className="mt-20">

            <span className="section-eyebrow">

              Technical Skills

            </span>

            <h2 className="mt-4 font-display text-4xl font-bold text-ink-100">

              Technology Stack

            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">

              {skills.map((category) => (

                <div
                  key={category.id}
                  className="glass-card p-8"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

                      <category.icon size={28} />

                    </div>

                    <div>

                      <h3 className="font-display text-2xl font-semibold text-ink-100">

                        {category.title}

                      </h3>

                      <p className="mt-2 text-sm leading-7 text-ink-400">

                        {category.description}

                      </p>

                    </div>

                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {category.skills.map((skill) => (

                      <span
                        key={skill.name}
                        className="pill"
                      >

                        {skill.name}

                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="mt-20 rounded-3xl border border-accent-cyan/20 bg-accent-cyan/5 p-10 text-center">

            <h2 className="font-display text-4xl font-bold text-ink-100">

              Interested in working together?

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-ink-300">

              I'm passionate about building scalable data engineering solutions,
              modern ETL pipelines, SQL data warehouses and business intelligence
              dashboards that help organizations make confident, data-driven
              decisions.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

             <a
  href={profile.resumeUrl}
  download="Yousaf_Umer_Resume.pdf"
  className="btn-primary"
>
  <FiDownload />
  Download PDF
</a>

              <a

                href={`mailto:${profile.email}`}

                className="btn-secondary"

              >

                <FiMail />

                Contact Me

              </a>

            </div>

          </div>

        </div>

      </div>

    </motion.main>

  )

}
            