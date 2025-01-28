"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "ICS",
    institution: "LaSalle College, Multan",
    period: "2021 - 2023",
    details: "Relevant coursework: Data Structures & Algorithms, Web Development, Machine Learning Basics",
  },
  {
    degree: "CS50",
    institution: "YouTube",
    period: "Completed",
    details: "Comprehensive introduction to computer science and programming",
  },
]

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <CardTitle>{item.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-400">{item.institution}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                  <p className="text-gray-300">{item.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

