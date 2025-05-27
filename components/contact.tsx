"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <AnimatedSection animation="fade-right" delay={200}>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">{"Let's work together"}</h3>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={300}>
                <p className="text-foreground/70 mb-8">
                  I'm always interested in new opportunities and exciting AI projects. Whether you have a question or
                  just want to say hi, feel free to reach out!
                </p>
              </AnimatedSection>

              <div className="space-y-4">
                <AnimatedSection animation="fade-right" delay={400}>
                  <div className="flex items-center space-x-3 group">
                    <Mail className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-foreground">aarathi.nair@example.com</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={500}>
                  <div className="flex items-center space-x-3 group">
                    <Phone className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-foreground">+1 (555) 123-4567</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={600}>
                  <div className="flex items-center space-x-3 group">
                    <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-foreground">San Francisco, CA</span>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="border-secondary/30 bg-background shadow-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-secondary/30 text-foreground placeholder:text-foreground/50 focus:border-primary transition-colors"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-secondary/30 text-foreground placeholder:text-foreground/50 focus:border-primary transition-colors"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background border-secondary/30 text-foreground placeholder:text-foreground/50 focus:border-primary transition-colors"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
