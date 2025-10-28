"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    company: "Ford Motor Company",
    role: "Core Systems Software Engineer",
    period: "2022 - Present",
    type: "Full-time",
    icon: Briefcase,
    highlights: [
      "Automated engineering workflows saving 1,100+ engineer hours annually",
      "Containerized and deployed microservices on GCP Cloud Run",
      "Implemented ADFS SSO authentication for 200+ internal users",
      "Built scalable data pipelines processing millions of records",
      "Led technical design reviews and mentored junior engineers",
    ],
    tech: ["Python", "Flask", "GCP", "Docker", "PostgreSQL"],
  },
  {
    company: "Independent Projects",
    role: "Software Engineer & Automation Developer",
    period: "2020 - Present",
    type: "Freelance",
    icon: Code,
    highlights: [
      "Developed AI-powered tools using LLMs and modern frameworks",
      "Built workflow automation systems with n8n and custom APIs",
      "Created full-stack applications with Next.js and Convex",
      "Designed and implemented scalable backend architectures",
      "Delivered measurable impact through data-driven solutions",
    ],
    tech: ["Next.js", "TypeScript", "n8n", "OpenAI", "FastAPI"],
  },
]

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building reliable systems and delivering measurable impact through automation and AI.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isExpanded = expandedIndex === index

              return (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-cyan-400 border-4 border-background hidden md:block" />

                  <Card
                    className="ml-0 md:ml-20 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-cyan-400/10 shrink-0">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                            <p className="text-muted-foreground">{exp.company}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">
                              {exp.type}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="space-y-4 pt-2">
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-cyan-400 mt-1">•</span>
                                  <span className="leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                              {exp.tech.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
