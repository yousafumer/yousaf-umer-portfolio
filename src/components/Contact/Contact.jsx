import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiDownload
} from 'react-icons/fi'

import { profile } from '../../data/profile'
import SectionHeading from '../shared/SectionHeading'

export default function Contact() {

  return (

    <section
      id="contact"
      className="section"
    >

      <SectionHeading

        eyebrow="Let's Connect"

        title="Ready to Build Something Meaningful?"

        subtitle="Whether you have a full-time opportunity, freelance project or simply want to discuss Data Engineering, I'd be happy to connect."

      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr,.9fr]">

        <motion.div

          initial={{ opacity: 0, x: -30 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          className="glass-card p-10"

        >

          <span className="section-eyebrow">

            Contact Information

          </span>

          <h2 className="mt-4 font-display text-4xl font-bold text-ink-100">

            Let's talk about your next data project.

          </h2>

          <p className="mt-6 text-lg leading-9 text-ink-300">

            I'm currently open to Data Engineering, Data Analyst and Python Automation opportunities. Feel free to reach out through any of the channels below.

          </p>

          <div className="mt-10 space-y-6">
                        <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-5 rounded-2xl border border-white/10 p-5 transition-all hover:border-accent-cyan hover:bg-white/[0.02]"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

                <FiMail size={24} />

              </div>

              <div>

                <p className="text-sm text-ink-500">

                  Email

                </p>

                <h3 className="font-semibold text-ink-100">

                  {profile.email}

                </h3>

              </div>

            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-5 rounded-2xl border border-white/10 p-5 transition-all hover:border-accent-cyan hover:bg-white/[0.02]"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

                <FiPhone size={24} />

              </div>

              <div>

                <p className="text-sm text-ink-500">

                  Phone

                </p>

                <h3 className="font-semibold text-ink-100">

                  {profile.phone}

                </h3>

              </div>

            </a>

            <div
              className="flex items-center gap-5 rounded-2xl border border-white/10 p-5"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

                <FiMapPin size={24} />

              </div>

              <div>

                <p className="text-sm text-ink-500">

                  Location

                </p>

                <h3 className="font-semibold text-ink-100">

                  {profile.location}

                </h3>

              </div>

            </div>

          </div>
                  </motion.div>

        <motion.div

          initial={{ opacity: 0, x: 30 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          className="glass-card p-10"

        >

          <span className="section-eyebrow">

            Find Me Online

          </span>

          <h2 className="mt-4 font-display text-4xl font-bold text-ink-100">

            Let's stay connected.

          </h2>

          <p className="mt-6 text-lg leading-9 text-ink-300">

            Explore my GitHub repositories, professional journey on LinkedIn, Upwork profile and download my latest resume.

          </p>

          <div className="mt-10 grid gap-4">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition-all hover:border-accent-cyan"
            >

              <div className="flex items-center gap-4">

                <FiGithub size={24} />

                <span className="font-semibold">

                  GitHub

                </span>

              </div>

              <FiExternalLink />

            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition-all hover:border-accent-cyan"
            >

              <div className="flex items-center gap-4">

                <FiLinkedin size={24} />

                <span className="font-semibold">

                  LinkedIn

                </span>

              </div>

              <FiExternalLink />

            </a>

            <a
              href={profile.upwork}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition-all hover:border-accent-cyan"
            >

              <div className="flex items-center gap-4">

                <FiExternalLink size={24} />

                <span className="font-semibold">

                  Upwork

                </span>

              </div>

              <FiExternalLink />

            </a>

            <a
              href={profile.resumeUrl}
              download
              className="btn-primary mt-4 justify-center"
            >

              <FiDownload />

              Download Resume

            </a>

          </div>
                  </motion.div>

      </div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: 0.7 }}

        className="mt-20"

      >

        <div className="glass-card overflow-hidden">

          <div className="bg-pipeline-gradient p-[1px]">

            <div className="bg-base-900 px-10 py-12 text-center">

              <h2 className="font-display text-4xl font-bold text-ink-100">

                Available for Full-Time & Freelance Opportunities

              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-ink-300">

                If you're looking for someone who can build scalable ETL pipelines,
                automate data workflows, design SQL data warehouses or create
                insightful Power BI dashboards, I'd love to discuss how I can
                contribute to your team.

              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <a

                  href={`mailto:${profile.email}`}

                  className="btn-primary"

                >

                  <FiMail />

                  Email Me

                </a>

                <a

                  href={profile.linkedin}

                  target="_blank"

                  rel="noreferrer"

                  className="btn-secondary"

                >

                  <FiLinkedin />

                  Connect on LinkedIn

                </a>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  )

}
          