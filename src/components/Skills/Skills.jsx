import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import SectionHeading from '../shared/SectionHeading'

export default function Skills() {

  return (

    <section
      id="skills"
      className="section"
    >

      <SectionHeading

        eyebrow="Technical Skills"

        title="Technologies I Use to Build Data Solutions"

        subtitle="My toolkit spans the complete modern data stack—from data extraction and engineering to warehousing, analytics and visualization."

      />

      <div className="mt-16 space-y-12">

        {skills.map((category, categoryIndex) => (

          <motion.div

            key={category.title}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ delay: categoryIndex * 0.12 }}

          >

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pipeline-gradient text-base-950">

                <category.icon size={28} />

              </div>

              <div>

                <h2 className="font-display text-3xl font-bold text-ink-100">

                  {category.title}

                </h2>

                <p className="mt-2 text-ink-400">

                  {category.description}

                </p>

              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {category.skills.map((skill, skillIndex) => (

                <motion.div

                  key={skill.name}

                  initial={{ opacity: 0, y: 20 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}

                  transition={{
                    delay: skillIndex * 0.05
                  }}

                  whileHover={{
                    y: -8
                  }}

                  className="group glass-card-hover p-6"

                >

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-accent-cyan transition-all duration-300 group-hover:bg-pipeline-gradient group-hover:text-base-950">

                      <skill.icon size={28} />

                    </div>

                    <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-cyan">

                      {skill.level}

                    </span>

                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink-100">

                    {skill.name}

                  </h3>

                  <p className="mt-3 leading-7 text-ink-400">

                    {skill.description}

                  </p>

                </motion.div>

              ))}

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

          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="section-eyebrow">

                Always Learning

              </span>

              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink-100">

                Technology evolves fast.

                <br />

                So do I.

              </h2>

              <p className="mt-6 text-lg leading-9 text-ink-300">

                I continuously invest my time in learning modern Data Engineering technologies including Microsoft Fabric, Apache Spark, Snowflake, cloud data platforms, workflow orchestration and scalable ETL architecture to stay aligned with current industry practices.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  12+

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Core Technologies

                </p>

              </div>

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  9+

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Portfolio Projects

                </p>

              </div>

              <div className="glass-card p-6 text-center">

                <h3 className="font-display text-4xl font-bold gradient-text">

                  6+

                </h3>

                <p className="mt-3 text-sm text-ink-400">

                  Months Experience

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
            