"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    company: "Ford Motor Company",
    location: "Dearborn, MI",
    role: "Tool Automation Programmer",
    period: "03/2023 – 05/2025",
    type: "Full-time",
    icon: Briefcase,
    highlights: [
      "Saved 1,100+ engineer hours annually by reducing vehicle wiring-schematic prep from 40 hours to under 1 hour through Python automation that standardized parameters and caught errors in tests.",
      "Reduced deployment time by 50% by migrating CI/CD from Tekton to GitHub Actions and standardizing pipelines across services while maintaining 95% test coverage.",
      "Accelerated schematic compatibility checks by 10x with a diff engine that flags circuit, connector, and pin changes between revisions to catch regressions during design reviews.",
      "Centralized authentication for 200 engineers across 15 internal tools by implementing ADFS SSO on a Flask app deployed to GCP Cloud Run.",
    ],
    tech: ["Python", "Flask", "GitHub Actions", "GCP Cloud Run", "CI/CD"],
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
            2+ years of experience building automation tools and internal systems at scale.
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
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
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
                            <ul className="space-y-3">
                              {exp.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-cyan-400 mt-1 shrink-0">–</span>
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
