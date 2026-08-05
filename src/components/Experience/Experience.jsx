import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiTrendingUp,
  FiCheckCircle
} from 'react-icons/fi'

import { experience } from '../../data/experience'
import SectionHeading from '../shared/SectionHeading'

export default function Experience() {

  return (

    <section
      id="experience"
      className="section"
    >

      <SectionHeading

        eyebrow="Professional Journey"

        title="Experience Building Data Solutions"

        subtitle="Every role strengthened my ability to transform raw business data into accurate, automated and decision-ready information."

      />

      <div className="relative mt-20">

        <div className="absolute left-7 top-0 hidden h-full w-[2px] bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent lg:block" />

        <div className="space-y-14">

          {experience.map((job, index) => (

            <motion.div

              key={job.company}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * .15 }}

              className="relative lg:pl-24"

            >

              <div className="absolute left-0 top-4 hidden lg:flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950 shadow-glow">

                <FiBriefcase size={26} />

              </div>

              <div className="glass-card-hover p-8">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                  <div>

                    <span className="section-eyebrow">

                      {job.duration}

                    </span>

                    <h2 className="mt-3 font-display text-3xl font-bold text-ink-100">

                      {job.role}

                    </h2>

                    <p className="mt-2 text-lg font-medium text-accent-cyan">

                      {job.company}

                    </p>

                  </div>

                  <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-5 py-2 text-sm font-semibold text-accent-cyan">

                    {job.location}

                  </span>

                </div>

                <p className="mt-8 text-lg leading-9 text-ink-300">

                  {job.description}

                </p>

                <div className="mt-10 space-y-5">
                                    {job.highlights.map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >

                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan">

                        <FiCheckCircle size={16} />

                      </div>

                      <p className="flex-1 leading-8 text-ink-300">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

                <div className="mt-10 flex flex-wrap gap-3">

                  {job.skills.map((skill) => (

                    <span
                      key={skill}
                      className="pill"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                <div className="mt-10 rounded-2xl border border-accent-cyan/15 bg-accent-cyan/5 p-6">

                  <div className="flex items-center gap-3">

                    <FiTrendingUp
                      className="text-accent-cyan"
                      size={22}
                    />

                    <h3 className="font-display text-xl font-semibold text-ink-100">

                      Business Impact

                    </h3>

                  </div>

                  <p className="mt-4 leading-8 text-ink-300">

                    {job.impact}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}
                  </div>

      </div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: 0.7 }}

        className="mt-20"

      >

        <div className="glass-card overflow-hidden">

          <div className="grid gap-10 p-10 lg:grid-cols-3">

            <div>

              <h3 className="font-display text-5xl font-bold gradient-text">

                6+

              </h3>

              <p className="mt-4 leading-8 text-ink-300">

                Months of professional experience working with real business data, reporting workflows and operational analytics.

              </p>

            </div>

            <div>

              <h3 className="font-display text-5xl font-bold gradient-text">

                9+

              </h3>

              <p className="mt-4 leading-8 text-ink-300">

                Portfolio projects covering ETL, SQL Warehousing, Business Intelligence, Automation and Analytics.

              </p>

            </div>

            <div>

              <h3 className="font-display text-5xl font-bold gradient-text">

                12+

              </h3>

              <p className="mt-4 leading-8 text-ink-300">

                Modern technologies including Python, SQL Server, Airflow, Snowflake, Power BI, Excel and Docker.

              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  )

}
              