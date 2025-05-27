"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

const experiences = [
  {
    id: 1,
    title: "Senior AI Product Manager",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    type: "Full-time",
    description: [
      "Led the development of 3 AI-powered products that increased user engagement by 40%",
      "Managed cross-functional teams of 15+ engineers, designers, and data scientists",
      "Defined product strategy and roadmap for agentic AI solutions serving 100K+ users",
      "Collaborated with stakeholders to identify market opportunities and user needs",
    ],
    technologies: ["Machine Learning", "Product Strategy", "Agile", "User Research"],
  },
  {
    id: 2,
    title: "AI Product Manager",
    company: "InnovateLabs",
    location: "Palo Alto, CA",
    duration: "2020 - 2022",
    type: "Full-time",
    description: [
      "Launched 2 successful AI products from concept to market with $2M+ ARR",
      "Conducted user research and market analysis to inform product decisions",
      "Worked closely with ML engineers to translate business requirements into technical specs",
      "Implemented data-driven product development processes and KPI tracking",
    ],
    technologies: ["Product Management", "Data Analysis", "A/B Testing", "Scrum"],
  },
  {
    id: 3,
    title: "Associate Product Manager",
    company: "StartupXYZ",
    location: "San Jose, CA",
    duration: "2019 - 2020",
    type: "Full-time",
    description: [
      "Assisted in product planning and feature prioritization for AI-driven platform",
      "Analyzed user feedback and metrics to drive product improvements",
      "Coordinated with engineering teams to ensure timely delivery of features",
      "Created product documentation and user stories for development teams",
    ],
    technologies: ["Product Planning", "User Analytics", "Jira", "Confluence"],
  },
  {
    id: 4,
    title: "Product Management Intern",
    company: "AI Solutions Inc",
    location: "Mountain View, CA",
    duration: "Summer 2018",
    type: "Internship",
    description: [
      "Supported senior product managers in market research and competitive analysis",
      "Created wireframes and user journey maps for new AI features",
      "Participated in user interviews and usability testing sessions",
      "Contributed to product requirement documents and feature specifications",
    ],
    technologies: ["Market Research", "Wireframing", "User Testing", "Documentation"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Work Experience</h2>
          </AnimatedSection>

          <StaggeredContainer className="space-y-8" staggerDelay={200} animation="fade-up">
            {experiences.map((exp, index) => (
              <Card
                key={exp.id}
                className="relative overflow-hidden border-secondary/30 bg-background hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 text-foreground">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-foreground/70">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4 text-accent" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex items-center gap-1 text-foreground/70">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{exp.duration}</span>
                      </div>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-2">•</span>
                        <span className="text-foreground/70">{item}</span>
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

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="mt-12 text-center">
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
