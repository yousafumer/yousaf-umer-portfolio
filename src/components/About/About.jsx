import { motion } from 'framer-motion'
import {
  FiDatabase,
  FiBarChart2,
  FiCpu,
  FiTrendingUp
} from 'react-icons/fi'

import { profile } from '../../data/profile'
import SectionHeading from '../shared/SectionHeading'

export default function About() {

  return (

    <section
      id="about"
      className="section"
    >

      <SectionHeading

        eyebrow="About Me"

        title="Designing Scalable Data Solutions From Raw Data to Business Intelligence"

        subtitle="I specialize in building scalable ETL pipelines, SQL data warehouses, automation workflows and interactive business intelligence solutions that convert raw data into trusted, decision-ready information."

      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr,.8fr]">

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .6 }}

        >

          <div className="glass-card p-10">

            <span className="section-eyebrow">

              Who I Am

            </span>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink-100">

              Transforming Complex Data Into Reliable Business Solutions.

            </h2>

            <div className="mt-8 space-y-7 text-lg leading-9 text-ink-300 [&_strong]:text-accent-cyan [&_strong]:font-semibold">

              {profile.about.map((paragraph) => (

  <p
    key={paragraph}
    dangerouslySetInnerHTML={{ __html: paragraph }}
  />

))}

              

            </div>

          </div>

        </motion.div>
                <motion.div

          initial={{ opacity: 0, x: 40 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .7 }}

          className="space-y-6"

        >

          <div className="glass-card-hover p-7">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

              <FiDatabase size={26} />

            </div>

            <h3 className="font-display text-2xl font-semibold text-ink-100">

              Data Engineering

            </h3>

            <p className="mt-4 leading-8 text-ink-300">

              Designing scalable ETL pipelines, SQL data warehouses, workflow orchestration with Apache Airflow, and automated data processing solutions that transform raw information into trusted business assets.

            </p>

          </div>

          <div className="glass-card-hover p-7">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

              <FiBarChart2 size={26} />

            </div>

            <h3 className="font-display text-2xl font-semibold text-ink-100">

              Business Intelligence

            </h3>

            <p className="mt-4 leading-8 text-ink-300">

              Building interactive Power BI and Excel dashboards that transform operational data into KPIs, trends and actionable insights for better business decisions.

            </p>

          </div>

          <div className="glass-card-hover p-7">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

              <FiCpu size={26} />

            </div>

            <h3 className="font-display text-2xl font-semibold text-ink-100">

              Automation

            </h3>

            <p className="mt-4 leading-8 text-ink-300">

              Developing Python automation and web scraping solutions that collect, clean and prepare structured datasets while reducing repetitive manual work.

            </p>

          </div>

        </motion.div>

      </div>
            <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: .7 }}

        className="mt-16"

      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="glass-card p-8 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pipeline-gradient text-base-950">

              <FiTrendingUp size={28} />

            </div>

            <h3 className="mt-6 font-display text-4xl font-bold gradient-text">

              9+

            </h3>

            <p className="mt-3 text-sm leading-7 text-ink-300">

              End-to-end projects covering ETL, SQL Warehousing, Business Intelligence, Automation and Analytics.

            </p>

          </div>

          <div className="glass-card p-8 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pipeline-gradient text-base-950">

              <FiDatabase size={28} />

            </div>

            <h3 className="mt-6 font-display text-4xl font-bold gradient-text">

              12+

            </h3>

            <p className="mt-3 text-sm leading-7 text-ink-300">

              Modern tools including SQL Server, Airflow, Snowflake, Power BI, Python, Docker and more.

            </p>

          </div>

          <div className="glass-card p-8 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pipeline-gradient text-base-950">

              <FiCpu size={28} />

            </div>

            <h3 className="mt-6 font-display text-4xl font-bold gradient-text">

              6+

            </h3>

            <p className="mt-3 text-sm leading-7 text-ink-300">

              Months of professional experience solving business problems using data-driven solutions.

            </p>

          </div>

        </div>

      </motion.div>

    </section>

  )

}