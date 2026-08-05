import { motion } from 'framer-motion'
import {
  FiStar,
  FiExternalLink,
  FiMessageSquare
} from 'react-icons/fi'

import SectionHeading from '../shared/SectionHeading'
import { testimonials } from '../../data/testimonials'
import { profile } from '../../data/profile'

export default function Testimonials() {

  return (

    <section
      id="testimonials"
      className="section"
    >

      <SectionHeading

        eyebrow="Client Feedback"

        title="Building Trust Through Quality Work"

        subtitle="The best portfolio is backed by real client satisfaction. Every successful delivery strengthens trust, communication and long-term professional relationships."

      />

      <div className="mt-16 max-w-5xl mx-auto">

        {testimonials.map((testimonial, index) => (

          <motion.div

            key={testimonial.id}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ delay: index * .15 }}

            className="glass-card overflow-hidden"

          >

            <div className="grid lg:grid-cols-[1fr,.9fr]">

              <div className="overflow-hidden">

                <img

                  src={testimonial.image}

                  alt={testimonial.project}

                  className="h-full w-full object-cover"

                />

              </div>

              <div className="p-10">
                                <div className="flex items-center justify-between">

                  <div>

                    <span className="section-eyebrow !mb-2">

                      Verified Review

                    </span>

                    <h2 className="font-display text-3xl font-bold text-ink-100">

                      {testimonial.company}

                    </h2>

                  </div>

                  <div className="flex gap-1">

                    {[...Array(testimonial.rating)].map((_, i) => (

                      <FiStar
                        key={i}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-accent-cyan/15 bg-accent-cyan/5 p-6">

                  <div className="flex items-center gap-3">

                    <FiMessageSquare
                      className="text-accent-cyan"
                      size={22}
                    />

                    <span className="font-semibold text-ink-100">

                      Client Feedback

                    </span>

                  </div>

                  <p className="mt-5 text-lg italic leading-9 text-ink-300">

                    "{testimonial.review}"

                  </p>

                </div>

                <div className="mt-8">

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">

                    Project

                  </h3>

                  <p className="mt-3 text-lg text-ink-100">

                    {testimonial.project}

                  </p>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {testimonial.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="pill"
                    >

                      {tech}

                    </span>

                  ))}

                </div>
                                <div className="mt-10 border-t border-white/10 pt-8">

                  <a
                    href={profile.upwork}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full justify-center"
                  >

                    <FiExternalLink />

                    View Freelance Profile

                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: .7 }}

        className="mt-20"

      >

        <div className="glass-card p-10 text-center">

          <h2 className="font-display text-4xl font-bold text-ink-100">

            Looking for a reliable Data Engineer or Data Analyst?

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-ink-300">

            I enjoy solving real business problems using data engineering,
            automation, SQL, Power BI and scalable ETL pipelines. Whether it's
            building data warehouses, automating workflows or creating business
            dashboards, I'm always excited to work on impactful projects.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#contact"
              className="btn-primary"
            >

              Let's Work Together

            </a>

          </div>

        </div>

      </motion.div>

    </section>

  )

}
              