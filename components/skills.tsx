"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

const skillCategories = [
  {
    title: "Product Management",
    skills: [
      { name: "Product Strategy", level: 95 },
      { name: "User Research", level: 90 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Data Analysis", level: 80 },
    ],
  },
  {
    title: "AI & Technology",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "AI Ethics", level: 90 },
      { name: "LLMs/NLP", level: 80 },
      { name: "Data Science", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Figma/Design", level: 85 },
      { name: "Analytics Tools", level: 90 },
      { name: "Jira/Confluence", level: 95 },
      { name: "SQL/Python", level: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Skills & Technologies</h2>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={200} animation="fade-up">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="border-secondary/30 bg-background hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-center text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-accent">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 skill-progress"
                        style={{
                          animationDelay: `${index * 200 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
