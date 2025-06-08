import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { AIPapers } from "@/components/ai-papers"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Experience } from "@/components/experience"
import { FloatingVideo } from "@/components/floating-video"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AIPapers />
        <Contact />
      </main>
      <Footer />
      <FloatingVideo />
    </div>
  )
}
