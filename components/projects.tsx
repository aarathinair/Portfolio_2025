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
      "Led product development for an intelligent customer support system using NLP and machine learning to automate 70% of customer inquiries while maintaining high satisfaction scores.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["AI Agents & Evaluations"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Agentic Incident Management System",
    description:
      "Managed the creation of an AI agent that generates personalized content for marketing teams, resulting in 3x faster content creation and 40% higher engagement rates.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["AI Agents & Evaluations"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "PocketCFO - One stop Financial Advisor for Consumers",
    description:
      "Oversaw development of a recommendation system that increased user engagement by 60% through personalized AI-driven suggestions and real-time learning algorithms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["AI Ethics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Productivity & Task Management for Students",
    description:
      "Developed comprehensive AI ethics guidelines and governance framework adopted across the organization, ensuring responsible AI development and deployment practices.",
    image: "/Project_GoalDiggers.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "HCI & UI/UX - Pregnancy Tracker",
    description:
      "Developed comprehensive AI ethics guidelines and governance framework adopted across the organization, ensuring responsible AI development and deployment practices.",
    image: "/Project_PregnancyTracker.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Google Ads - North Star Metric",
    description:
      "Developed comprehensive AI ethics guidelines and governance framework adopted across the organization, ensuring responsible AI development and deployment practices.",
    image: "/Project_GoogleAds.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "MyCircle - Social Media for Autistic Individuals",
    description:
      "Developed comprehensive AI ethics guidelines and governance framework adopted across the organization, ensuring responsible AI development and deployment practices.",
    image: "/Project_MyCircle.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Linkedin - OKRs 2024",
    description:
      "Developed comprehensive AI ethics guidelines and governance framework adopted across the organization, ensuring responsible AI development and deployment practices.",
    image: "/Project_LinkedinOKRs.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "YC - Startup Pitch & Investment Analysis",
    description:
      "Developed comprehensive AI ethics guidelines and governance framework adopted across the organization, ensuring responsible AI development and deployment practices.",
    image: "/Project_YCPitch.png?height=300&width=500",
    technologies: ["Product & Strategy - CMU"],
    liveUrl: "#",
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
                  <p className="text-foreground/70">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
