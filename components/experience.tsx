"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

const experiences = [
  {
    id: 1,
    title: "AI Agents Researcher",
    company: "Vinaj Ventures",
    location: "Redwood City,CA",
    duration: "Feb'25 - Apr'25",
    type: "Full-time",
    description: [
      "Researched 100+ agentic AI startups across multi-agent orchestration, LangChain, CrewAI, and MCP frameworks to define investment theses and risk profiles.",
      "Identified 5 high-potential ventures through deep ecosystem mapping and competitive analysis.",
    ],
    technologies: ["Machine Learning", "Product Strategy", "Agile", "User Research"],
  },
  {
    id: 2,
    title: "AI Product Manager - Intern",
    company: "NetApp - B2B Cloud Optimization and Cost Management - Spot.io [Acquired by Flexera]",
    location: "San Jose,CA",
    duration: "Jun'24 - Aug'24",
    type: "Full-time",
    description: [
      "Led product strategy for an AI-powered onboarding agent across 8+ Spot by NetApp products, enhancing personalization and FinOps adoption in multi-cloud (AWS, Azure, GCP) environments.",
      "Collaborated with infra, MLOps, and design teams to define onboarding workflows, IAM/RBAC policies, and feature specs—streamlining user acquisition and secure cloud access control.",
    ],
    technologies: ["Product Management", "Data Analysis", "A/B Testing", "Scrum"],
  },
  {
    id: 3,
    title: "Master's Student",
    company: "Carnegie Mellon University",
    location: "Mountain View, California",
    duration: "Aug'23 - Jan'25",
    type: "Full-time",
    description: [
      "Pursued a Master's in Software Management at Carnegie Mellon University with a focus on AI product strategy, agentic systems, and startup venture ecosystems.",
      "Built hands-on projects using LangChain, CrewAI, and Streamlit; explored AI safety, multi-agent orchestration, and ethical alignment in real-world enterprise use cases.",
    ],
    technologies: ["Product Planning", "User Analytics", "Jira", "Confluence"],
  },
  {
    id: 4,
    title: "Platform Product Manager",
    company: "Scripbox - B2C Digital Investment & Advisory App - Series D Accel Funded",
    location: "Bangalore,India",
    duration: "Oct'21 - Aug'23",
    type: "Full-time",
    description: [
      "Led AI-driven onboarding, payments modernization, and personalization experiments across the platform team—driving a 10% uplift in activation, 70% AUM growth, and 12% lift in re-engagement CTR.",
      "Owned mission-critical systems (Orders, CRM, NSE OMS/PMS), improved transaction security with adaptive authentication, and scaled platform ops to support high-growth fintech use cases.",
    ],
    technologies: ["Product Planning", "User Analytics", "Jira", "Confluence"],
  },
  {
    id: 5,
    title: "Software Engineer 1",
    company: "Fidelity Information Services (B2B Enterprise Banking)",
    location: "Bangalore,India",
    duration: "Mar'21 - Oct'21",
    type: "Full-time",
    description: [
      "Banking App Development:Developed & tested for the Bank Visibility Application using Java & Spring MVC, enhancing functionality, performance & UX",
    ],
    technologies: ["Market Research", "Wireframing", "User Testing", "Documentation"],
  },
  {
    id: 6,
    title: "Technology Intern",
    company: "Unilever",
    location: "Bangalore,India",
    duration: "Jan'20 - Jun'20",
    type: "Full-time",
    description: [
      "Banking App Development:Developed & tested for the Bank Visibility Application using Java & Spring MVC, enhancing functionality, performance & UX",
    ],
    technologies: ["Market Research", "Wireframing", "User Testing", "Documentation"],
  },
]

export function Experience() {
  // Split experiences into left and right columns
  const leftColumnExperiences = experiences.slice(0, 3) // First 3 experiences
  const rightColumnExperiences = experiences.slice(3, 6) // Last 3 experiences

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Work Experience</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <StaggeredContainer className="space-y-8" staggerDelay={200} animation="fade-right">
                {leftColumnExperiences.map((exp) => (
                  <Card
                    key={exp.id}
                    className="relative overflow-hidden border-secondary/30 bg-background hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                    <CardHeader>
                      <div className="flex flex-col gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2 text-foreground leading-tight">{exp.title}</CardTitle>
                          <div className="flex flex-col gap-2 text-foreground/70">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="font-medium text-sm leading-tight">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="flex items-center gap-1 text-foreground/70">
                            <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-secondary/20 text-secondary border-secondary/30 w-fit"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-2 flex-shrink-0">•</span>
                            <span className="text-foreground/70 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredContainer>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <StaggeredContainer className="space-y-8" staggerDelay={200} animation="fade-left">
                {rightColumnExperiences.map((exp) => (
                  <Card
                    key={exp.id}
                    className="relative overflow-hidden border-secondary/30 bg-background hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                    <CardHeader>
                      <div className="flex flex-col gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2 text-foreground leading-tight">{exp.title}</CardTitle>
                          <div className="flex flex-col gap-2 text-foreground/70">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="font-medium text-sm leading-tight">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="flex items-center gap-1 text-foreground/70">
                            <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-secondary/20 text-secondary border-secondary/30 w-fit"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-2 flex-shrink-0">•</span>
                            <span className="text-foreground/70 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredContainer>
            </div>
          </div>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full border border-secondary/30">
                <span className="text-sm text-foreground">
                  <strong className="text-accent">5+ years</strong> of experience in AI Product Management
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
