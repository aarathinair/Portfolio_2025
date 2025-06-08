"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-secondary/30 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "experience", "projects", "skills", "ai-papers", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground/70 hover:text-primary transition-colors capitalize relative group"
              >
                {item === "ai-papers" ? "AI Papers" : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-secondary/30">
            <div className="flex flex-col space-y-4 pt-4">
              {["home", "about", "experience", "projects", "skills", "ai-papers", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-foreground/70 hover:text-primary transition-colors capitalize"
                >
                  {item === "ai-papers" ? "AI Papers" : item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
