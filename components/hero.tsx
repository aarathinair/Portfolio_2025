"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Mail, ArrowDown } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Fintech + Agentic AI Product Manager building systems that think and act."

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
    { name: "Vinaj Ventures", logo: "/Vinaj.png" },
    { name: "NetApp", logo: "/Netapp.png" },
    { name: "Carnegie Mellon University", logo: "/CMU.png" },
    { name: "Scripbox", logo: "/Scripbox.png" },
    { name: "Unilever", logo: "/Unilever.png" },
    { name: "FIS", logo: "/FIS.png" },
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

          {/* Infinite Scrolling Logo Carousel */}
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="relative mb-16">
              <p className="text-sm text-foreground/60 mb-8 font-medium">Trusted by leading organizations</p>

              {/* Logo Carousel Container */}
              <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl py-8 border border-purple-100/50">
                <div className="logo-carousel">
                  <div className="logo-track">
                    {/* First set of logos */}
                    {companies.map((company, index) => (
                      <div key={`first-${index}`} className="logo-item">
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          className="logo-image"
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company, index) => (
                      <div key={`second-${index}`} className="logo-item">
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          className="logo-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
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

      {/* CSS for logo carousel animation */}
      <style jsx>{`
        .logo-carousel {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .logo-track {
          display: flex;
          width: calc(200px * 12); /* 6 logos × 2 sets × 200px each */
          animation: scroll 30s linear infinite;
        }

        .logo-item {
          flex: 0 0 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }

        .logo-image {
          max-height: 46px; /* Increased by 15% from 40px */
          max-width: 138px; /* Increased by 15% from 120px */
          width: auto;
          height: auto;
          object-fit: contain;
          /* Removed grayscale filter to show original colors */
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .logo-image:hover {
          opacity: 1;
          /* Removed transform scale to prevent hover effects */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * 6)); /* Move by width of one complete set */
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logo-track {
            width: calc(150px * 12);
            animation: scroll 25s linear infinite;
          }

          .logo-item {
            flex: 0 0 150px;
            padding: 0 15px;
          }

          .logo-image {
            max-height: 37px; /* Increased by 15% from 32px */
            max-width: 115px; /* Increased by 15% from 100px */
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-150px * 6));
            }
          }
        }

        /* Removed hover pause - animation continues infinitely */
        /* .logo-carousel:hover .logo-track { animation-play-state: paused; } */

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
          
          .logo-track {
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
          }
          
          .logo-item {
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
