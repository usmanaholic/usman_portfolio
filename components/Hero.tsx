"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 }
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: "out"
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            }
          },
          retina_detect: true
        }}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-secondary/30 animate-gradient-xy" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] opacity-20 animate-shimmer" />
      </div>

      {/* Floating Blobs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -left-64 w-96 h-96 bg-gradient-to-r from-primary/40 to-purple-500/40 rounded-full blur-3xl opacity-50 animate-float"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-32 -right-64 w-96 h-96 bg-gradient-to-r from-secondary/40 to-pink-500/40 rounded-full blur-3xl opacity-50 animate-float-delayed"
      />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Muhammad Usman
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Web Developer | React & Django Specialist | Machine Learning Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="space-y-4"
        >
          <Button size="lg" className="btn-glow group bg-transparent hover:bg-transparent text-white">
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/usmanaholic" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="btn-glow bg-transparent hover:bg-transparent text-white">
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="btn-glow bg-transparent hover:bg-transparent text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:usmansinghi786@gmail.com">
              <Button variant="outline" size="icon" className="btn-glow bg-transparent hover:bg-transparent text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-grid-pulse" />
      </div>
    </section>
  )
}