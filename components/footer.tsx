import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
  return (
    <footer className="bg-secondary/10 py-12 border-t border-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <div className="flex justify-center space-x-6 mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/aarathinair" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/aarathinair1/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent/10 hover:text-accent transition-all duration-300"
                asChild
              >
                <a href="mailto:nairaarathi22@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-foreground/70 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> by Aarathi Nair
            </p>
            <p className="text-sm text-foreground/50 mt-2">© 2025 All rights reserved.</p>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  )
}
