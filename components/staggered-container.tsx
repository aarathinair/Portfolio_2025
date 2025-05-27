"use client"

import { useInView } from "@/hooks/use-in-view"
import { type ReactNode, Children, cloneElement, isValidElement } from "react"

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale-up"
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 100,
  animation = "fade-up",
}: StaggeredContainerProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            key: index,
            className: `${child.props.className || ""} transition-all duration-600 ease-out ${
              !isInView
                ? (
                    () => {
                      switch (animation) {
                        case "fade-up":
                          return "opacity-0 translate-y-8"
                        case "fade-down":
                          return "opacity-0 -translate-y-8"
                        case "fade-left":
                          return "opacity-0 translate-x-8"
                        case "fade-right":
                          return "opacity-0 -translate-x-8"
                        case "fade-in":
                          return "opacity-0"
                        case "scale-up":
                          return "opacity-0 scale-95"
                        default:
                          return "opacity-0 translate-y-8"
                      }
                    }
                  )()
                : "opacity-100 translate-y-0 translate-x-0 scale-100"
            }`,
            style: {
              ...child.props.style,
              transitionDelay: `${index * staggerDelay}ms`,
            },
          })
        }
        return child
      })}
    </div>
  )
}
