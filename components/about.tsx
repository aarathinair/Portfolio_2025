"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Target } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function About() {
  return (
    <section id="about" className="py-20 bg-white -mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-600">About Me</h2>
          </AnimatedSection>

          {/* Photo and Text Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Photo on the left */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="flex justify-center lg:justify-middle">
                <div className="relative">
                  <img
                    src="/AarathiNair.png?height=300&width=300"
                    alt="Aarathi Nair - AI Product Manager"
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-purple-100 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text on the right */}
            <AnimatedSection animation="fade-left" delay={400}>
              <div className="space-y-6">
                <p className="text-lg text-foreground/100 leading-relaxed text-justify">
                  I'm an <strong>Agentic AI Product Manager</strong> and <strong>Agentic AI Researcher</strong> with 3+
                  years of experience in <strong>B2B CloudOps</strong> and <strong>B2C Fintech</strong>. I've led
                  product strategy for <strong>AI onboarding Agent</strong> at NetApp, built fintech tools at Scripbox,
                  and earned my <strong>Master's from Carnegie Mellon University</strong>.
                </p>

                <p className="text-lg text-foreground/100 leading-relaxed text-justify">
                  Today, I prototype multi-agent systems using <strong>LangChain</strong>, <strong>CrewAI</strong>, and{" "}
                  <strong>Streamlit</strong> to simplify enterprise workflows. I work at the intersection of Product, AI
                  Agent Evaluations, and Human-centered design.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed text-justify">
                  {"Explore the "}
                  <strong>{"Projects"}</strong>
                  {" section to see applied Agentic AI work like "}
                  <strong>
                    <em>{"CreditMaestro"}</em>
                  </strong>
                  {" and "}
                  <strong>
                    <em>{"Incident Management"}</em>
                  </strong>
                  {" in action."}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Three Cards Below */}
          <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={200} animation="fade-up" delay={600}>
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
