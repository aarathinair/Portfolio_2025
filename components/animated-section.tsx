"use client"

import { useInView } from "@/hooks/use-in-view"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale-up"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${duration}`

    if (!isInView) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "fade-down":
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`
        case "fade-left":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "fade-right":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "fade-in":
          return `${baseClasses} ${durationClass} opacity-0`
        case "scale-up":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
