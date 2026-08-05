import { motion } from 'framer-motion'
import {
  FiAward,
  FiExternalLink,
  FiShield
} from 'react-icons/fi'

import { certificates } from '../../data/certificates'
import SectionHeading from '../shared/SectionHeading'

export default function Certificates() {

  return (

    <section
      id="certificates"
      className="section"
    >

      <SectionHeading

        eyebrow="Professional Learning"

        title="Certifications & Technical Credentials"

        subtitle="Continuous learning is a core part of my engineering journey. These certifications and verified badges represent hands-on learning in programming, cloud data platforms and modern data technologies."

      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {certificates.map((certificate, index) => (

          <motion.div

            key={certificate.title}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ delay: index * .12 }}

            whileHover={{
              y: -8
            }}

            className="group glass-card-hover overflow-hidden"

          >

            <div className="relative overflow-hidden">

              <img

                src={certificate.image}

                alt={certificate.title}

                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"

              />

              <div className="absolute left-5 top-5">

                <span className="rounded-full bg-pipeline-gradient px-4 py-2 text-xs font-semibold text-base-950">

                  Verified

                </span>

              </div>

            </div>

            <div className="p-7">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pipeline-gradient text-base-950">

                  <FiAward size={24} />

                </div>

                <div>

                  <h3 className="font-display text-xl font-bold text-ink-100">

                    {certificate.title}

                  </h3>

                  <p className="text-sm text-accent-cyan">

                    {certificate.organization}

                  </p>

                </div>

              </div>
                            <p className="mt-6 leading-8 text-ink-300">

                {certificate.description}

              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {certificate.skills.map((skill) => (

                  <span
                    key={skill}
                    className="pill"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <div className="mt-8 rounded-2xl border border-accent-cyan/15 bg-accent-cyan/5 p-5">

                <div className="flex items-center gap-3">

                  <FiShield
                    className="text-accent-cyan"
                    size={20}
                  />

                  <span className="font-semibold text-ink-100">

                    Verified Credential

                  </span>

                </div>

                <p className="mt-3 text-sm leading-7 text-ink-300">

                  This credential can be verified directly from the official issuer using the verification link below.

                </p>

              </div>

              <a

                href={certificate.link}

                target="_blank"

                rel="noreferrer"

                className="btn-primary mt-8 w-full justify-center"

              >

                Verify Credential

                <FiExternalLink />

              </a>

            </div>

          </motion.div>

        ))}
              </div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: 0.7 }}

        className="mt-20"

      >

        <div className="glass-card overflow-hidden">

          <div className="grid gap-10 p-10 lg:grid-cols-[1.2fr,.8fr]">

            <div>

              <span className="section-eyebrow">

                Continuous Learning

              </span>

              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink-100">

                Great engineers never stop learning.

              </h2>

              <p className="mt-6 text-lg leading-9 text-ink-300">

                Beyond building projects, I actively invest time in learning modern data engineering technologies, cloud platforms, workflow orchestration, analytics and scalable architectures. Every certification represents practical knowledge that I apply in real-world portfolio projects.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  3+

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Verified Credentials

                </p>

              </div>

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  2

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Snowflake Badges

                </p>

              </div>

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  1

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Coursera Certificate

                </p>

              </div>

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  ∞

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Learning Mindset

                </p>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  )

}