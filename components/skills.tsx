"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

const skillCategories = [
  {
    title: "Product & Strategy",
    data: [
      { skill: "Product Strategy", value: 95 },
      { skill: "User Research", value: 90 },
      { skill: "Agile/Scrum", value: 85 },
      { skill: "Data Analysis", value: 80 },
      { skill: "Market Research", value: 88 },
      { skill: "Roadmapping", value: 92 },
    ],
    color: "#7c3aed",
  },
  {
    title: "AI & Technology",
    data: [
      { skill: "Machine Learning", value: 85 },
      { skill: "AI Ethics", value: 90 },
      { skill: "LLMs/NLP", value: 80 },
      { skill: "Data Science", value: 75 },
      { skill: "AI Agents", value: 88 },
      { skill: "MLOps", value: 70 },
    ],
    color: "#a855f7",
  },
  {
    title: "Tools & Platforms",
    data: [
      { skill: "Figma/Design", value: 85 },
      { skill: "Analytics Tools", value: 90 },
      { skill: "Jira/Confluence", value: 95 },
      { skill: "SQL/Python", value: 70 },
      { skill: "Streamlit", value: 82 },
      { skill: "Git/GitHub", value: 88 },
    ],
    color: "#8b5cf6",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
                <CardContent className="flex flex-col items-center">
                  <div className="w-full h-64 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={category.data}>
                        <PolarGrid stroke="#e5e7eb" strokeWidth={1} />
                        <PolarAngleAxis
                          dataKey="skill"
                          tick={{
                            fontSize: 10,
                            fill: "#6b7280",
                            textAnchor: "middle",
                          }}
                          className="text-xs"
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{
                            fontSize: 8,
                            fill: "#9ca3af",
                          }}
                          tickCount={6}
                        />
                        <Radar
                          name={category.title}
                          dataKey="value"
                          stroke={category.color}
                          fill={category.color}
                          fillOpacity={0.2}
                          strokeWidth={2}
                          dot={{
                            fill: category.color,
                            strokeWidth: 2,
                            r: 4,
                          }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-center w-full">
                    {category.data.map((item) => (
                      <div key={item.skill} className="flex items-center justify-between">
                        <span className="text-foreground/70 truncate">{item.skill}</span>
                        <span className="text-accent font-medium ml-1">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
