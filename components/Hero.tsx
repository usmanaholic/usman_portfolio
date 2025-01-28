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
    <section className="h-screen flex items-center relative overflow-hidden">
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

      {/* Content Container */}
      <div className="container mx-auto flex items-center h-full px-4 z-10 relative">
        {/* Left Content */}
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
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
              <Link href="https://github.com/usmanaholic" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-glow group bg-transparent hover:bg-transparent text-white">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <div className="flex space-x-4 mt-4">
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
        </div>

        {/* Right Content - Coding Animation Block */}
        <div className="w-1/2 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-xl p-8 bg-black/50 rounded-lg border border-primary/30 shadow-xl backdrop-blur-sm"
          >
            {/* Terminal Window Decorations */}
            <div className="flex space-x-2 mb-4">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Animated Code Block */}
            <div className="font-mono text-sm space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-purple-400"
              >
                <span className="text-blue-400">const</span> developer = {'{'}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="ml-4 text-green-400"
              >
                name: <span className="text-yellow-400">'Muhammad Usman'</span>,
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="ml-4 text-green-400"
              >
                skills: [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'Django'</span>, <span className="text-yellow-400">'ML'</span>],
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="ml-4 text-green-400"
              >
                passion: <span className="text-yellow-400">'Creative Coding'</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-purple-400"
              >
                {'}'};
              </motion.div>
            </div>

            {/* Animated Cursor */}
            <motion.div
              className="absolute bottom-8 right-8 h-4 w-0.5 bg-green-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-grid-pulse" />
      </div>
    </section>
  )
}