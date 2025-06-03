"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Target } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function About() {
  return (
    <section id="about" className="py-20 bg-white -mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">About Me</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Aarathi Nair - AI Product Manager"
                  className="w-48 h-48 rounded-full object-cover border-4 border-purple-100 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent"></div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-foreground/80 leading-relaxed text-center">
                I'm an AI Product Manager with 5+ years of experience turning complex AI technologies into practical
                tools. At NetApp, I led product strategy for AI-powered onboarding. Now I'm building agentic systems
                like CreditMaestro (finance) and an Incident Triage Agent (support) using LangChain, CrewAI, and
                Streamlit. I'm passionate about simplifying enterprise workflows through multi-agent orchestration—and
                I'm actively exploring the next step in that journey with companies like Glean.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={200} animation="fade-up" delay={200}>
            <Card className="text-center border-purple-100 bg-white hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">AI Strategy</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Crafting intelligent systems that drive measurable ROI through agent reasoning, retrieval, and
                  automation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 bg-white hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">User Focus</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Designing for clarity and trust—so AI feels intuitive, not invisible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 bg-white hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Outcome-Obsessed</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every demo I ship solves a real business pain, not a hypothetical problem.
                </p>
              </CardContent>
            </Card>
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
