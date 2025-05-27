"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Agentic AI Product Manager"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-secondary/10 to-primary/10"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Hi, I'm <span className="text-primary">Aarathi Nair</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="text-2xl md:text-3xl text-foreground/70 mb-8 h-12">
              <span className="text-accent">{text}</span>
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
              I create innovative AI-powered products that transform user experiences. Passionate about bridging the gap
              between cutting-edge technology and human-centered design.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection animation="fade-in" delay={1200}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </AnimatedSection>
    </section>
  )
}
