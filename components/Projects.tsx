"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Wildwonder Clone",
    description:
      "A pixel-perfect Next.js clone of the Wildwonder website, featuring responsive design and optimized performance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkden.PNG-w2FrpvOXgmnNStjxDvmuWOPSjKrNtc.png",
    tags: ["Next.js", "React", "Responsive Design"],
    liveUrl: "https://wildwonder-nine.vercel.app/",
    githubUrl: "https://github.com/usmanaholic/wildwonder",
  },
  {
    title: "Trick Storee",
    description:
      "An e-commerce store built with Django, featuring product filtering, dynamic search, and a cookie-based cart system with payment integration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage.PNG-DnzV8GRBtjmHczO4LxWc81QO4b3sZK.png",
    tags: ["Django", "Python", "E-commerce", "Payment Integration"],
    githubUrl: "https://github.com/usmanaholic/trickstoree",
  },
  {
    title: "Community Platform",
    description: "A platform for entry-test students to share notes and collaborate, built with Django and React.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jeswin-3380743.jpg-Zj1yF8pbFQoRlo1uFdHEDZUKR1VDfJ.jpeg",
    tags: ["Django", "React", "Community", "Collaboration"],
    githubUrl: "",
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gray-700 text-white h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-auto">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-white text-black hover:bg-gray-100 transition-colors"
                      >
                        <GitHub className="h-4 w-4" />
                        Source Code
                      </Button>
                    </Link>
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

