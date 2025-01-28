"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/50"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-08%20at%203.30.50%20PM-NtXymV4JNSEmSdDhGdiwQUEONzwABF.jpeg"
              alt="Muhammad Usman"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-lg mb-4 text-gray-200">
              I'm a results-driven Web Developer based in Multan, Pakistan, with hands-on experience in modern web
              technologies including React.js, Next.js, Django, and Flask. I'm skilled in building user-friendly,
              scalable applications, e-commerce solutions, and community platforms.
            </p>
            <p className="text-lg mb-4 text-gray-200">
              My passion lies in delivering clean, efficient code and collaborating with teams to solve complex
              problems. I'm currently exploring TensorFlow and machine learning to expand my technical expertise.
            </p>
            <p className="text-lg mb-6 text-gray-200">
              When I'm not coding, you can find me working on personal projects, contributing to open-source, or
              expanding my knowledge in machine learning and data structures.
            </p>
            <a href="https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/usman_resume-g0bOnYh2YzHcnHAWqPSALU5vCwWhrJ.pdf" download
            download="Muhammad_Usman_CV.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="btn-glow group bg-transparent hover:bg-transparent text-white">
              Download CV
              <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

