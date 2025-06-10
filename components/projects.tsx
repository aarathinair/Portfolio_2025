"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

const projects = [
  {
    id: 1,
    title: "CreditMaestro - Multi-Agent Credit Card Management",
    description:
      "A multi-agent platform that automates transaction categorization, spending insights & recommendations,across multiple credit cards using Plaid & Whatsapp MCP",
    image: "/Project_CreditMaestro_MCP.png?height=300&width=500",
    technologies: ["AI Agents & Evaluations"],
    liveUrl: "https://www.youtube.com/watch?v=BahukjxFChg",
    githubUrl: "https://github.com/aarathinair/CreditMaestro_MCP",
  },
  {
    id: 2,
    title: "Decagon x Stripe - Agentic Payment Dispute Management",
    description:
      "Decagon's Agent Operating Principles agentic framework for Stripe to automate evidence gathering, dispute filing, and outcome tracking for seamless payment dispute resolution.",
    image: "/Project_DecagonxStripe.png?height=300&width=500",
    technologies: ["AI Agents & Evaluations"],
    liveUrl: "https://docs.google.com/document/d/13hssCBkJHvp0oH06e6mp_QDBkC3anAI1cu69oTyyL4o/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "EMA x Stripe - Merchant Onboarding Management",
    description:
      "Stripe's Merchant Onboarding Agent powered by EMA Fusion agentic workflow to automate onboarding—via smart orchestration and compliance checks.",
    image: "/Project_EmaxStripe.png?height=300&width=500",
    technologies: ["AI Agents & Evaluations"],
    liveUrl: "https://docs.google.com/document/d/1jKkHen0oNXy6A49f5BS65wkA1FXOcQNTUe9pzD3MIg0/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Agentic Incident Management System",
    description:
      "An autonomous incident response system for Abnormal AI that detects, triages, and orchestrates remediation steps through coordinated AI agents.",
    image: "/Project_Abnormal.png?height=300&width=500",
    technologies: ["AI Agents & Evaluations"],
    liveUrl: "https://abnormalaiaassessment-idhtepbke9psjncj3ugi2f.streamlit.app/",
    githubUrl: "https://github.com/aarathinair/AbnormalAI_aassessment",
  },
  {
    id: 5,
    title: "PocketCFO - One stop Financial Advisor for Consumers",
    description:
      "A hyper-personalized PocketCFO AI delivering holistic financial management—budgeting, ethical investing, and real-time coaching—presented in my AI Ethics class using frameworks like the Ethical Matrix, value-sensitive design, and discussions on fairness, accountability, and transparency (FAT).",
    image: "/Project_PocketCFO.png?height=300&width=500",
    technologies: ["AI Ethics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "AI Productivity & Task Management for Students",
    description:
      "An AI-powered assistant that organizes coursework, suggests optimal study plans, and automates task reminders for students.",
    image: "/Project_GoalDiggers.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "https://docs.google.com/presentation/d/1zqjitpQccz8I8z_B2S3v2iXjIGHVJCm3KXiKvswqLVs/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "HCI & UI/UX - Pregnancy Tracker",
    description:
      "A human-centered pregnancy tracker with intuitive visualizations, personalized health insights, and milestone reminders.",
    image: "/Project_PregnancyTracker.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "https://docs.google.com/presentation/d/1_CtKyiBvpymD5BD6CsoNQASWLZSJuD6DdWCYzkAAixk/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Google Ads - North Star Metric",
    description:
      "A data-driven dashboard that defines, tracks, and optimizes your Google Ads North Star metric to maximize long-term ROI.",
    image: "/Project_GoogleAds.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "https://docs.google.com/presentation/d/1KpEpYapJ01NAFsjQMrOAzGau0Tx3G9Nhu3iazdRCZNc/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "MyCircle - Social Media for Autistic Individuals",
    description:
      "A supportive social platform designed for autistic users, offering structured interactions, interest-based communities, and sensory-friendly design.",
    image: "/Project_MyCircle.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "https://docs.google.com/presentation/d/1DUq7ckq2le3u3LvSiv_U2X8sFv08jYJQnVzwPp5BtTs/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Linkedin - OKRs 2024",
    description:
      "A strategic OKR framework that aligns LinkedIn’s 2024 goals—user growth, engagement, and monetization—across product and marketing teams.",
    image: "/Project_LinkedinOKRs.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "https://docs.google.com/presentation/d/1Hmegg2pIWxi4aWnQIvYCFY2OEjSt-7BA4j6QBytFaag/edit?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "YC - Startup Pitch & Investment Analysis",
    description:
      "A comprehensive toolkit that evaluates YC startup pitches, benchmarks key metrics, and provides data-driven investment recommendations.",
    image: "/Project_YCPitch.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "https://docs.google.com/presentation/d/1N8d1HtaMD8TqogCyIk4lVWpdIbPtaZV2K_wtbnzjU6M/edit?usp=sharing",
    githubUrl: "#",
  },
]

export function Projects() {
  const [filter, setFilter] = useState("AI Agents & Evaluations")

  const technologies = ["AI Agents & Evaluations", "AI Ethics", "Product & Strategy - CMU", "Pre-2023"]

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())),
        )

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Projects</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {technologies.map((tech) => (
                <Button
                  key={tech}
                  variant={filter === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(tech)}
                  className={`capitalize transition-all duration-300 ${
                    filter === tech
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                      : "border-secondary/30 text-foreground/70 hover:bg-primary/10 hover:text-primary hover:border-primary"
                  }`}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8" staggerDelay={200} animation="scale-up">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-secondary/30 bg-background"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-foreground">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="hover:text-accent transition-colors" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-justify leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
