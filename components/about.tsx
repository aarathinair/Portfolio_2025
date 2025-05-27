"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Target } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="fade-right" delay={200}>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto border border-secondary/30"
              />
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection animation="fade-left" delay={300}>
                <p className="text-lg text-foreground/70">
                  I'm a passionate Agentic AI Product Manager with over 5 years of experience creating AI-powered
                  solutions that make a difference. I love turning complex AI challenges into simple, intuitive products
                  that users love.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={400}>
                <p className="text-lg text-foreground/70">
                  When I'm not strategizing product roadmaps, you can find me exploring new AI technologies, analyzing
                  user feedback, or enjoying a good cup of coffee while reading about the latest developments in
                  artificial intelligence and product management.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={500}>
                <p className="text-lg text-foreground/70">
                  I believe in building AI products that are both powerful and user-friendly, always keeping the human
                  experience at the center of innovation.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={150} animation="fade-up">
            <Card className="text-center border-secondary/30 bg-background hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">AI Strategy</h3>
                <p className="text-foreground/70">
                  Developing comprehensive AI product strategies that align with business goals and user needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/30 bg-background hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">User Focus</h3>
                <p className="text-foreground/70">
                  Creating user-centered AI experiences with attention to detail and human-computer interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/30 bg-background hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Results Driven</h3>
                <p className="text-foreground/70">
                  Delivering measurable outcomes through data-driven decisions and agile product development.
                </p>
              </CardContent>
            </Card>
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
