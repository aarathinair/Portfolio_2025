"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

const skillCategories = [
  {
    title: "Product & Strategy",
    data: [
      { skill: "Product Strategy", value: 95 },
      { skill: "User Research & Design", value: 90 },
      { skill: "Stakeholder Management", value: 85 },
      { skill: "Regulatory & Compliance", value: 85 },
      { skill: "Market Research", value: 88 },
      { skill: "Roadmapping", value: 92 },
    ],
    color: "#7c3aed",
  },
  {
    title: "AI & Technology",
    data: [
      { skill: "Agentic Frameworks", value: 90 },
      { skill: "AI Ethics", value: 90 },
      { skill: "Prompt Engineering", value: 80 },
      { skill: "Model Evaluations", value: 75 },
      { skill: "RAG", value: 88 },
      { skill: "MLOps", value: 70 },
    ],
    color: "#a855f7",
  },
  {
    title: "Tools & Platforms",
    data: [
      { skill: "Figma/Design", value: 90 },
      { skill: "Amplitude/Mixpanel", value: 100 },
      { skill: "Rapid Prototyping Vercel", value: 95 },
      { skill: "SQL/Python", value: 95 },
      { skill: "Streamlit", value: 90 },
      { skill: "Jira/Asana", value: 90 },
    ],
    color: "#8b5cf6",
  },
]

// Custom Spider Chart Component
function SpiderChart({ data, color }: { data: Array<{ skill: string; value: number }>; color: string }) {
  const centerX = 120
  const centerY = 120
  const maxRadius = 80
  const angleStep = (2 * Math.PI) / data.length

  // Calculate points for the skill values
  const skillPoints = data.map((item, index) => {
    const angle = index * angleStep - Math.PI / 2 // Start from top
    const radius = (item.value / 100) * maxRadius
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    return { x, y, angle, radius: (item.value / 100) * maxRadius }
  })

  // Create path for the filled area
  const pathData =
    skillPoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ") + " Z"

  // Grid circles (20%, 40%, 60%, 80%, 100%)
  const gridCircles = [20, 40, 60, 80, 100].map((percent) => (
    <circle
      key={percent}
      cx={centerX}
      cy={centerY}
      r={(percent / 100) * maxRadius}
      fill="none"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
  ))

  // Grid lines from center to each skill point
  const gridLines = data.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2
    const endX = centerX + maxRadius * Math.cos(angle)
    const endY = centerY + maxRadius * Math.sin(angle)
    return <line key={index} x1={centerX} y1={centerY} x2={endX} y2={endY} stroke="#e5e7eb" strokeWidth="1" />
  })

  // Skill labels
  const skillLabels = data.map((item, index) => {
    const angle = index * angleStep - Math.PI / 2
    const labelRadius = maxRadius + 20
    const x = centerX + labelRadius * Math.cos(angle)
    const y = centerY + labelRadius * Math.sin(angle)

    return (
      <text
        key={item.skill}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-xs fill-gray-600"
        style={{ fontSize: "10px" }}
      >
        {item.skill.length > 12 ? item.skill.substring(0, 12) + "..." : item.skill}
      </text>
    )
  })

  return (
    <div className="w-full h-64 flex items-center justify-center">
      <svg width="240" height="240" viewBox="0 0 240 240">
        {/* Grid circles */}
        {gridCircles}

        {/* Grid lines */}
        {gridLines}

        {/* Filled area */}
        <path d={pathData} fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />

        {/* Data points */}
        {skillPoints.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="4" fill={color} stroke="white" strokeWidth="2" />
        ))}

        {/* Skill labels */}
        {skillLabels}
      </svg>
    </div>
  )
}

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
                  <SpiderChart data={category.data} color={category.color} />

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-center w-full mt-4">
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
