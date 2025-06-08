"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Calendar, Users } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface Paper {
  id: number
  title: string
  authors: string[]
  venue: string
  date: string
  category: string
  keyInsights: string[]
  relevance: string
  arxivUrl: string
  status: "reading" | "completed" | "queued"
  tags: string[]
}

const papers: Paper[] = [
  {
    id: 1,
    title: "Policy-shaped prediction: avoiding distractions in model-based reinforcement learning - Stanford",
    authors: ["Miles Hutson", "Isaac Kauvar", "Nick Haber"],
    venue: "Stanford HAI",
    date: "2024-12-08",
    category: "Multi-Agent Systems",
    keyInsights: [
      "Combines reasoning traces and task-specific actions in an interleaved manner",
      "Enables LLMs to generate both reasoning traces and actions for dynamic reasoning",
      "Demonstrates superior performance on language reasoning and decision making tasks",
    ],
    relevance:
      "Directly applicable to my multi-agent system work - understanding how to structure agent reasoning loops",
    arxivUrl: "https://arxiv.org/pdf/2412.05766",
    status: "reading",
    tags: ["Reasoning", "Action Planning", "LLM Agents"],
  },
  {
    id: 2,
    title: "TRISM FOR AGENTIC AI: A REVIEW OF TRUST, RISK, AND SECURITY MANAGEMENT IN LLM-BASED AGENTIC MULTI-AGENT SYSTEMS",
    authors: ["Shaina Raza1", "Ranjan Sapkota", "Manoj Karkee", "Christos Emmanouilidis"],
    venue: "Anthropic",
    date: "2025-06-04",
    category: "Agentic Security",
    keyInsights: [
      "Self-supervised approach to training helpful, harmless AI assistants",
      "Uses AI feedback to critique and revise responses according to constitutional principles",
      "Reduces need for human feedback while maintaining safety and helpfulness",
    ],
    relevance:
      "Essential for building trustworthy AI agents in production environments - aligns with my AI ethics focus",
    arxivUrl: "https://arxiv.org/abs/2506.04133",
    status: "completed",
    tags: ["AI Safety", "Constitutional AI", "RLHF"],
  },
]

// Research focus areas with colors
const researchAreas = [
  { name: "Multi-Agent Systems", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "AI Alignment", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "Agent Security", color: "bg-red-100 text-red-800 border-red-200" },
  { name: "Company Specific", color: "bg-purple-100 text-purple-800 border-purple-200" },
]

export function AIPapers() {
  const [isPaused, setIsPaused] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reading":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "queued":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "reading":
        return <BookOpen className="h-3 w-3" />
      case "completed":
        return <Users className="h-3 w-3" />
      case "queued":
        return <Calendar className="h-3 w-3" />
      default:
        return <BookOpen className="h-3 w-3" />
    }
  }

  const getCategoryColor = (category: string) => {
    const area = researchAreas.find((area) => area.name === category)
    return area ? area.color : "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <section id="ai-papers" className="py-20 bg-gradient-to-br from-purple-50/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">AI Papers I'm Reading</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
                Staying current with cutting-edge AI research to inform product decisions and technical strategy. Here's
                what's on my reading list across key research areas.
              </p>

              {/* Research Focus Areas */}
              <div className="flex flex-wrap justify-center gap-3">
                {researchAreas.map((area) => (
                  <Badge key={area.name} variant="outline" className={`${area.color} text-sm px-3 py-1`}>
                    {area.name}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Horizontal Scrolling Papers Carousel */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="relative">
              {/* Carousel Container */}
              <div
                className="papers-carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className={`papers-carousel-track ${isPaused ? "paused" : ""}`}>
                  {/* First set of papers */}
                  {papers.map((paper) => (
                    <div key={`first-${paper.id}`} className="paper-card-container">
                      <Card className="paper-card group hover:shadow-xl transition-all duration-300 border-secondary/30 bg-background/90 backdrop-blur-sm h-full">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${getStatusColor(paper.status)} flex items-center gap-1 flex-shrink-0`}
                                >
                                  {getStatusIcon(paper.status)}
                                  {paper.status.charAt(0).toUpperCase() + paper.status.slice(1)}
                                </Badge>
                                <Badge variant="outline" className={`text-xs ${getCategoryColor(paper.category)}`}>
                                  {paper.category}
                                </Badge>
                              </div>
                              <CardTitle className="text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {paper.title}
                              </CardTitle>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hover:text-primary transition-colors flex-shrink-0 h-8 w-8"
                              asChild
                            >
                              <a href={paper.arxivUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>

                          <div className="text-xs text-foreground/60">
                            <p className="mb-1 truncate">
                              {paper.authors.slice(0, 2).join(", ")}
                              {paper.authors.length > 2 ? " et al." : ""}
                            </p>
                            <p className="truncate">
                              {paper.venue} •{" "}
                              {new Date(paper.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                            </p>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-3 pt-0">
                          {/* Key Insights */}
                          <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm">Key Insights:</h4>
                            <ul className="space-y-1">
                              {paper.keyInsights.slice(0, 2).map((insight, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-foreground/70">
                                  <span className="text-primary mt-1 flex-shrink-0 text-xs">•</span>
                                  <span className="line-clamp-2">{insight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Relevance */}
                          <div className="bg-purple-50/50 rounded-lg p-2 border border-purple-100">
                            <h4 className="font-medium text-foreground mb-1 text-xs">Why I'm Reading This:</h4>
                            <p className="text-xs text-foreground/70 italic line-clamp-2">{paper.relevance}</p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {paper.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {papers.map((paper) => (
                    <div key={`second-${paper.id}`} className="paper-card-container">
                      <Card className="paper-card group hover:shadow-xl transition-all duration-300 border-secondary/30 bg-background/90 backdrop-blur-sm h-full">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${getStatusColor(paper.status)} flex items-center gap-1 flex-shrink-0`}
                                >
                                  {getStatusIcon(paper.status)}
                                  {paper.status.charAt(0).toUpperCase() + paper.status.slice(1)}
                                </Badge>
                                <Badge variant="outline" className={`text-xs ${getCategoryColor(paper.category)}`}>
                                  {paper.category}
                                </Badge>
                              </div>
                              <CardTitle className="text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {paper.title}
                              </CardTitle>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hover:text-primary transition-colors flex-shrink-0 h-8 w-8"
                              asChild
                            >
                              <a href={paper.arxivUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>

                          <div className="text-xs text-foreground/60">
                            <p className="mb-1 truncate">
                              {paper.authors.slice(0, 2).join(", ")}
                              {paper.authors.length > 2 ? " et al." : ""}
                            </p>
                            <p className="truncate">
                              {paper.venue} •{" "}
                              {new Date(paper.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                            </p>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-3 pt-0">
                          {/* Key Insights */}
                          <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm">Key Insights:</h4>
                            <ul className="space-y-1">
                              {paper.keyInsights.slice(0, 2).map((insight, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-foreground/70">
                                  <span className="text-primary mt-1 flex-shrink-0 text-xs">•</span>
                                  <span className="line-clamp-2">{insight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Relevance */}
                          <div className="bg-purple-50/50 rounded-lg p-2 border border-purple-100">
                            <h4 className="font-medium text-foreground mb-1 text-xs">Why I'm Reading This:</h4>
                            <p className="text-xs text-foreground/70 italic line-clamp-2">{paper.relevance}</p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {paper.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
            </div>
          </AnimatedSection>

          {/* Reading Stats */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 bg-white/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-purple-100/50 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {papers.filter((p) => p.status === "completed").length}
                  </div>
                  <div className="text-sm text-foreground/60">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {papers.filter((p) => p.status === "reading").length}
                  </div>
                  <div className="text-sm text-foreground/60">Currently Reading</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {papers.filter((p) => p.status === "queued").length}
                  </div>
                  <div className="text-sm text-foreground/60">In Queue</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CSS for papers carousel animation */}
      <style jsx>{`
        .papers-carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .papers-carousel-track {
          display: flex;
          width: calc(380px * ${papers.length * 2}); /* Card width × total cards */
          animation: scroll-papers 80s linear infinite;
        }

        .papers-carousel-track.paused {
          animation-play-state: paused;
        }

        .paper-card-container {
          flex: 0 0 380px;
          padding: 0 12px;
          height: 420px;
        }

        .paper-card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes scroll-papers {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-380px * ${papers.length})); /* Move by width of one complete set */
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .papers-carousel-track {
            width: calc(320px * ${papers.length * 2});
            animation: scroll-papers-mobile 70s linear infinite;
          }

          .paper-card-container {
            flex: 0 0 320px;
            padding: 0 8px;
            height: 400px;
          }

          @keyframes scroll-papers-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * ${papers.length}));
            }
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .papers-carousel-track {
            animation: none;
          }
          
          .papers-carousel-track {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            width: 100%;
            padding-bottom: 10px;
          }
          
          .paper-card-container {
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
