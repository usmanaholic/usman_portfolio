"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    content:
      "Working with this developer was an absolute pleasure. Their technical skills and attention to detail resulted in a product that exceeded our expectations.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateTech",
    content:
      "I was impressed by the developer's ability to quickly grasp complex concepts and deliver elegant solutions. They're a valuable asset to any development team.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Mike Johnson",
    position: "Project Manager, WebSolutions",
    content:
      "The developer's commitment to quality and timely delivery made our project a success. Their communication skills and proactive approach were outstanding.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-700 text-white h-full">
                <CardContent className="p-6">
                  <p className="mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

