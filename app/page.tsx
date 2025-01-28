import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Timeline from "@/components/Timeline"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Education />
      <Contact />
    </main>
  )
}

