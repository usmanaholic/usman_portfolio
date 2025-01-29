"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Web Developer",
    company: "CAT",
    location: "Multan",
    period: "2021 - Present",
    description:
      "Collaborated on websites like entrytest.com and thecatonline.com, enhancing user experience for educational platforms. Implemented a package-based dashboard for customers, integrating order numbers and category-specific delivery fees. Hosted and deployed applications on shared hosting platforms like spaceship.com.",
  },
  {
    title: "Intern Web Developer",
    company: "Freelance/Personal Projects",
    period: "2021",
    description:
      "Designed and developed e-commerce applications using Django with features like cart systems, payment integration, and dynamic dashboards. Built a community platform for entry-test students to share notes and collaborate. Styled and customized admin pages and footers for better UI/UX design. Deployed projects on platforms such as Vercel and Netlify for global accessibility.",
  },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="relative border-l border-gray-600 pl-8 ml-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 relative"
            >
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-10 top-1.5 border-4 border-gray-800" />
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-blue-400">{experience.company}</p>
              {experience.location && <p className="text-sm text-gray-400">{experience.location}</p>}
              <p className="text-sm text-gray-400 mb-2">{experience.period}</p>
              <p className="text-gray-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

