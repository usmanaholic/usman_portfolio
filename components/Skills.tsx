"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Django", level: 85 },
  { name: "Flask", level: 80 },
  { name: "SQL", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 70 },
  { name: "TensorFlow", level: 60 },
  { name: "C", level: 70 },
]

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 flex justify-between">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

