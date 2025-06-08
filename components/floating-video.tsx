"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, X, Navigation } from "lucide-react"

interface WalkthroughStep {
  timestamp: number
  section: string
  title: string
  description: string
  elementId: string
}

const walkthroughSteps: WalkthroughStep[] = [
  {
    timestamp: 0,
    section: "Hero",
    title: "Welcome to My Portfolio",
    description: "AI Product Manager specializing in Agentic AI systems",
    elementId: "home",
  },
  {
    timestamp: 4,
    section: "About",
    title: "About Me",
    description: "3+ years in Fintech & AI, Carnegie Mellon graduate",
    elementId: "about",
  },
  {
    timestamp: 8,
    section: "Experience",
    title: "Professional Journey",
    description: "From NetApp to Scripbox, building AI-powered products",
    elementId: "experience",
  },
  {
    timestamp: 12,
    section: "Projects",
    title: "AI Agent Demos",
    description: "CreditMaestro and Incident Management systems",
    elementId: "projects",
  },
  {
    timestamp: 16,
    section: "Skills",
    title: "Technical Expertise",
    description: "Product Strategy, AI & Tech, Tools & Platforms",
    elementId: "skills",
  },
  {
    timestamp: 20,
    section: "AI Papers",
    title: "Continuous Learning",
    description: "Latest AI research in agents, alignment, and tool-use",
    elementId: "ai-papers",
  },
  {
    timestamp: 24,
    section: "Contact",
    title: "Let's Connect",
    description: "Ready to collaborate on your next AI project",
    elementId: "contact",
  },
]

export function FloatingVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isWalkthroughMode, setIsWalkthroughMode] = useState(false)
  const [currentStep, setCurrentStep] = useState<WalkthroughStep | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrolledStepRef = useRef<number>(-1)

  // Mock video playback for development (remove when you have a real video)
  useEffect(() => {
    if (isWalkthroughMode && isPlaying) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      timerRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 0.1
          if (newTime >= 30) {
            if (timerRef.current) clearInterval(timerRef.current)
            return 0
          }
          return newTime
        })
      }, 100)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isWalkthroughMode, isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleTimeUpdate = () => {
      if (!isWalkthroughMode) return
      setCurrentTime(video.currentTime)
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [isWalkthroughMode])

  // Walkthrough logic with improved scrolling
  useEffect(() => {
    if (!isWalkthroughMode || !isPlaying) return

    // Find the current step based on timestamp
    let currentStepIndex = -1
    for (let i = walkthroughSteps.length - 1; i >= 0; i--) {
      if (currentTime >= walkthroughSteps[i].timestamp) {
        currentStepIndex = i
        break
      }
    }

    // If we found a valid step and it's different from the last scrolled step
    if (currentStepIndex !== -1 && currentStepIndex !== lastScrolledStepRef.current) {
      const step = walkthroughSteps[currentStepIndex]
      setCurrentStep(step)
      lastScrolledStepRef.current = currentStepIndex

      // Scroll to the section with a small delay to ensure smooth transitions
      setTimeout(() => {
        const element = document.getElementById(step.elementId)
        if (element) {
          console.log(`Scrolling to ${step.elementId} at time ${currentTime}`)
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [currentTime, isWalkthroughMode, isPlaying])

  const togglePlay = () => {
    if (isWalkthroughMode) {
      setIsPlaying(!isPlaying)
      return
    }

    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleWalkthrough = () => {
    // Reset state when toggling walkthrough mode
    setIsWalkthroughMode(!isWalkthroughMode)
    setCurrentTime(0)
    lastScrolledStepRef.current = -1

    if (!isWalkthroughMode) {
      // Starting walkthrough mode
      setCurrentStep(walkthroughSteps[0])
      const element = document.getElementById(walkthroughSteps[0].elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Exiting walkthrough mode
      setCurrentStep(null)
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    // Reset video if we have one
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      video.pause()
    }

    setIsPlaying(false)
  }

  const closeVideo = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
    }

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    setIsVisible(false)
    setIsWalkthroughMode(false)
    setCurrentStep(null)
    setIsPlaying(false)
  }

  if (!isVisible) return null

  return (
    <>
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ease-in-out ${
          isExpanded ? "w-96 h-64" : "w-64 h-40"
        }`}
      >
        <div className="relative group bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-purple-200/30 backdrop-blur-sm">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            poster="/placeholder.svg?height=160&width=256"
          >
            <source src="/aesthetic-video.mp4" type="video/mp4" />
            {/* Fallback with animated gradient */}
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="text-white text-center z-10">
                <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8" />
                </div>
                <p className="text-sm font-medium">Portfolio Walkthrough</p>
                <p className="text-xs opacity-80">Interactive Tour</p>
              </div>
            </div>
          </video>

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Top Controls */}
            <div className="absolute top-2 right-2 flex space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 hover:bg-black/70 text-white rounded-full transition-colors ${
                  isWalkthroughMode ? "bg-purple-600/80" : "bg-black/50"
                }`}
                onClick={toggleWalkthrough}
                title="Toggle Walkthrough Mode"
              >
                <Navigation className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={toggleExpand}
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={closeVideo}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-2 left-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Walkthrough Mode Indicator */}
          {isWalkthroughMode && (
            <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
              Walkthrough Mode
            </div>
          )}

          {/* Progress Bar for Walkthrough */}
          {isWalkthroughMode && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
              <div
                className="h-full bg-purple-500 transition-all duration-300"
                style={{ width: `${(currentTime / 30) * 100}%` }}
              ></div>
            </div>
          )}

          {/* Aesthetic Border Glow */}
          <div
            className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
              isWalkthroughMode
                ? "bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 opacity-100"
                : "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
            }`}
          ></div>

          {/* Floating Label */}
          <div className="absolute -top-8 left-0 bg-purple-600 text-white px-3 py-1 rounded-t-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isWalkthroughMode ? "Interactive Tour" : "Portfolio Showcase"}
          </div>
        </div>

        {/* Subtle Pulse Animation */}
        <style jsx>{`
          @keyframes subtle-pulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4);
            }
            50% {
              box-shadow: 0 0 0 8px rgba(124, 58, 237, 0);
            }
          }

          .group:not(:hover) {
            animation: ${isWalkthroughMode ? "none" : "subtle-pulse 3s infinite"};
          }
        `}</style>
      </div>

      {/* Walkthrough Step Overlay */}
      {isWalkthroughMode && currentStep && (
        <div className="fixed top-20 right-6 z-40 max-w-sm">
          <div className="bg-white/95 backdrop-blur-sm border border-purple-200 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">{currentStep.section}</span>
              <span className="text-xs text-gray-500">
                Step {walkthroughSteps.indexOf(currentStep) + 1} of {walkthroughSteps.length}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{currentStep.title}</h3>
            <p className="text-sm text-gray-600">{currentStep.description}</p>

            {/* Progress dots */}
            <div className="flex space-x-1 mt-3">
              {walkthroughSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= walkthroughSteps.indexOf(currentStep) ? "bg-purple-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
