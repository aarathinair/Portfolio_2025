"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function Contact() {
  const contactItems = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/aarathinair1/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nairaarathi22@gmail.com",
      href: "mailto:nairaarathi22@gmail.com",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (650) 705-9501",
      href: "tel:+16507059501",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/aarathinair",
      color: "bg-gray-800 hover:bg-gray-900",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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

          {/* Contact CTA Buttons */}
          <StaggeredContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={150} animation="scale-up">
            {contactItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Button
                  key={item.label}
                  asChild
                  size="lg"
                  className={`${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 h-20 text-left justify-start group rounded-xl`}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-6"
                  >
                    <IconComponent className="h-8 w-8 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">{item.label}</span>
                      <span className="text-sm opacity-90">{item.value}</span>
                    </div>
                  </a>
                </Button>
              )
            })}
          </StaggeredContainer>

          {/* Location */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="text-center">
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
