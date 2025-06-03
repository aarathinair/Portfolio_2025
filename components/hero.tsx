"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Mail, ArrowDown } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Agentic AI Product Manager building systems that think and act."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const opacity = Math.max(0, 1 - scrollPosition / (window.innerHeight * 0.6))
        const translateY = scrollPosition * 0.2
        heroSection.style.opacity = opacity.toString()
        heroSection.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const companies = [
    { name: "NetApp", logo: "/placeholder.svg?height=60&width=120&text=NetApp" },
    { name: "Carnegie Mellon University", logo: "/placeholder.svg?height=60&width=120&text=CMU" },
    { name: "Vinaj Ventures", logo: "/placeholder.svg?height=60&width=120&text=Scipbox" },
    { name: "Scripbox", logo: "/placeholder.svg?height=60&width=120&text=Glean" },
    { name: "FIS", logo: "/placeholder.svg?height=60&width=120&text=Glean" },
    { name: "Unilever", logo: "/placeholder.svg?height=60&width=120&text=Glean" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-background via-purple-50/30 to-purple-100/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Hi, I'm <span className="text-purple-600">Aarathi Nair</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="text-xl md:text-2xl text-foreground/70 mb-12 min-h-[3rem] leading-relaxed">
              {text}
              <span className="animate-pulse text-purple-600">|</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                onClick={() => scrollToSection("projects")}
              >
                <Zap className="h-5 w-5 mr-2" />
                View My Agent Demos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300 rounded-xl"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-5 w-5 mr-2" />
                Let's Connect
              </Button>
            </div>
          </AnimatedSection>

          {/* Floating Company Logos */}
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="relative mb-16">
              <p className="text-sm text-foreground/60 mb-6 font-medium">Trusted by leading organizations</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className="group relative"
                    style={{
                      animationDelay: `${800 + index * 200}ms`,
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 group-hover:scale-105">
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        className="h-8 md:h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection animation="fade-in" delay={1000}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-purple-600 hover:text-purple-700 transition-colors bg-white/50 rounded-full p-3 shadow-lg"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </AnimatedSection>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
