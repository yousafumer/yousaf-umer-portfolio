import {
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiMail,
  FiArrowUp
} from 'react-icons/fi'

import { profile } from '../../data/profile'

export default function Footer() {

  const year = new Date().getFullYear()

  return (

    <footer className="border-t border-white/10">

      <div className="section py-16">

        <div className="grid gap-12 lg:grid-cols-[1.2fr,.8fr]">

          <div>

            <span className="section-eyebrow">

              Thank You

            </span>

            <h2 className="mt-4 font-display text-4xl font-bold text-ink-100">

              Thanks for visiting my portfolio.

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink-300">

              I enjoy building modern data platforms, designing scalable ETL
              pipelines, developing SQL data warehouses and creating
              decision-ready analytics. If my work aligns with your team's
              goals, I'd be happy to connect.

            </p>

          </div>

          <div className="glass-card p-8">

            <h3 className="font-display text-2xl font-semibold text-ink-100">

              Quick Links

            </h3>

            <div className="mt-8 space-y-4">
                            <a
                href="#home"
                className="block text-ink-300 transition hover:text-accent-cyan"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-ink-300 transition hover:text-accent-cyan"
              >
                About
              </a>

              <a
                href="#projects"
                className="block text-ink-300 transition hover:text-accent-cyan"
              >
                Projects
              </a>

              <a
                href="#skills"
                className="block text-ink-300 transition hover:text-accent-cyan"
              >
                Skills
              </a>

              <a
                href="#contact"
                className="block text-ink-300 transition hover:text-accent-cyan"
              >
                Contact
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition hover:border-accent-cyan hover:text-accent-cyan"
              >

                <FiGithub size={20} />

              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition hover:border-accent-cyan hover:text-accent-cyan"
              >

                <FiLinkedin size={20} />

              </a>

              <a
                href={profile.upwork}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition hover:border-accent-cyan hover:text-accent-cyan"
              >

                <FiExternalLink size={20} />

              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition hover:border-accent-cyan hover:text-accent-cyan"
              >

                <FiMail size={20} />

              </a>

            </div>

          </div>

        </div>
                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">

          <p className="mt-2 text-ink-500">
  Built and maintained by{" "}
  <span className="font-medium text-ink-300">
    Yousaf Umer
  </span>.
</p>

          <a

            href="#home"

            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan hover:bg-accent-cyan hover:text-base-950"

            aria-label="Back to Top"

          >

            <FiArrowUp size={20} />

          </a>

        </div>

      </div>

    </footer>

  )

}
            