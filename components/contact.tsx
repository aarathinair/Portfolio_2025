"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function Contact() {
  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/aarathinair1/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      label: "Email",
      value: "nairaarathi22@gmail.com",
      href: "mailto:nairaarathi22@gmail.com",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
        </svg>
      ),
      label: "Phone",
      value: "+1 (650) 705-9501",
      href: "tel:+16507059501",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/aarathinair",
      color: "bg-gray-800 hover:bg-gray-900",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{"Let's work together"}</h3>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting AI projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Content - Centered Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left Side - 2x2 CTA Grid */}
            <div className="flex justify-center">
              <StaggeredContainer className="grid grid-cols-2 gap-4 w-fit" staggerDelay={150} animation="scale-up">
                {contactItems.map((item, index) => (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    className={`${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 h-24 w-48 text-center justify-center group rounded-xl flex-col relative overflow-hidden`}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center space-y-2 p-4"
                    >
                      {/* Brand Icon SVG */}
                      <div className="relative flex items-center justify-center h-8 w-8 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-sm">{item.label}</span>
                        <span className="text-xs opacity-90 text-center leading-tight">{item.value}</span>
                      </div>
                    </a>
                  </Button>
                ))}
              </StaggeredContainer>
            </div>

            {/* Right Side - Centered Bitmoji */}
            <AnimatedSection animation="fade-left" delay={400}>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Main Photo */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/AarathiBitmoji.png?height=500&width=500"
                      alt="Aarathi Nair - Contact Photo"
                      className="w-80 h-80 object-cover shadow-2xl"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-purple-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-foreground">Available for opportunities</span>
                    </div>
                  </div>

                  {/* Professional Frame Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-purple-200/50 pointer-events-none"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Location - Centered Below */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-full px-6 py-4 border border-purple-100/50 shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium text-lg">San Francisco, CA</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
