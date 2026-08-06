import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail
} from 'react-icons/fi'

import { profile } from '../../data/profile'
import PipelineFlow from '../shared/PipelineFlow'

function useTypingEffect(
  words,
  {
    typeSpeed = 60,
    deleteSpeed = 35,
    pause = 1800
  } = {}
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((value) =>
          deleting
            ? current.slice(0, value.length - 1)
            : current.slice(0, value.length + 1)
        )
      }, deleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeout)

  }, [
    text,
    deleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pause
  ])

  return text
}

export default function Hero() {

  const typed = useTypingEffect(profile.roles)

  return (
        <section
      id="home"
      className="relative overflow-hidden pt-20 pb-24 min-h-[88vh] flex items-center"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[150px]" />

        <div className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-accent-cyan/10 blur-[120px]" />

        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-accent-indigo/10 blur-[120px]" />

      </div>

      <div className="section py-0">

        <div className="grid items-start gap-20 lg:grid-cols-[1.1fr,.9fr]">

          {/* Left Side */}

          <motion.div

            initial={{ opacity: 0, y: 35 }}
            className="w-full"

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: .7 }}

          >

            <span className="inline-flex items-center rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-accent-cyan">

              Available For Opportunities

            </span>

            <h1 className="mt-8 font-display text-5xl font-bold leading-tight text-ink-100 lg:text-7xl">

              Building

              <span className="gradient-text">

                {" "}Reliable Data Platforms

              </span>

              <br />

              That Scale.

            </h1>

            <div className="mt-8 flex items-center gap-3">

              <span className="text-xl font-medium text-ink-300">

                {typed}

              </span>

              <span className="h-7 w-[2px] animate-pulse bg-accent-cyan" />

            </div>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-ink-300">
  Computer Science graduate specializing in{' '}
  <span className="font-semibold text-ink-100">Data Engineering</span>,{' '}
  <span className="font-semibold text-ink-100">ETL Pipelines</span>,{' '}
  <span className="font-semibold text-ink-100">SQL Data Warehousing</span>{' '}
  and{' '}
  <span className="font-semibold text-ink-100">Business Intelligence</span>.
  {' '}Passionate about designing scalable data solutions that transform raw
  data into business value.
</p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a

                href="#projects"

                className="btn-primary"

              >

                View Projects

                <FiArrowRight />

              </a>

              <a
  href={profile.resumeUrl}
  download="Yousaf_Umer_Resume.pdf"
  className="btn-secondary"
>
  <FiDownload />
  Download Resume
</a>

            </div>

            <div className="mt-10 flex items-center gap-6">
                            <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-xl text-ink-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan"
              >
                <FiGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-xl text-ink-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan"
              >
                <FiLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-xl text-ink-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan"
              >
                <FiMail />
              </a>

            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div className="glass-card p-5">

                <h3 className="font-display text-3xl font-bold gradient-text">

                  9+

                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-400">

                  Production Projects

                </p>

              </div>

              <div className="glass-card p-5">

                <h3 className="font-display text-3xl font-bold gradient-text">

                  6+

                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-400">

                  Months Experience

                </p>

              </div>

              <div className="glass-card p-5">

                <h3 className="font-display text-3xl font-bold gradient-text">

                  12+

                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-400">

                  Technologies

                </p>

              </div>

            </div>

          </motion.div>
                    {/* Right Side */}

         <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex justify-end mt-6"
>

            {/* Background Glow */}

            <div className="absolute inset-0 rounded-full bg-pipeline-gradient opacity-20 blur-3xl" />

            {/* Main Card */}

           <div className="relative w-full max-w-[460px] glass-card overflow-hidden rounded-[32px] px-8 pt-4 pb-8">
<img
  src={profile.image}
  alt={profile.name}
  className="mx-auto h-[470px] w-full rounded-3xl object-cover object-[center_top]"
/>

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-ink-500">
                    Name
                  </span>

                  <span className="font-semibold text-ink-100">
                    {profile.name}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-sm text-ink-500">
                    Location
                  </span>

                  <span className="font-semibold text-ink-100">
                    {profile.location}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-sm text-ink-500">
                    Specialization
                  </span>

                  <span className="font-semibold text-accent-cyan">
                    Data Engineering
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

     <div className="pt-4 pb-0">
  <PipelineFlow />
</div>

    </section>

  )

}
          