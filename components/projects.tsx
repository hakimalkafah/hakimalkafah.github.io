"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Wiring Schematic Automator",
    description:
      "Automated engineering workflow tool that generates wiring schematics from CAD data, saving 1,100+ engineer hours annually.",
    image: "/engineering-automation-dashboard.jpg",
    tech: ["Python", "Flask", "GCP Cloud Run", "ADFS SSO"],
    github: "#",
    demo: "#",
  },
  {
    title: "Construction Crew Scheduler",
    description:
      "AI-assisted scheduling MVP for construction teams with real-time updates and intelligent resource allocation.",
    image: "/construction-scheduling-app.jpg",
    tech: ["Next.js", "Convex", "Clerk", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "n8n Lead Scorer",
    description:
      "Automated lead scoring and enrichment workflow for YouTube sponsors with multi-source data integration.",
    image: "/lead-scoring-automation.jpg",
    tech: ["n8n", "Python", "APIs", "Webhooks"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cloud Deployment Pipeline",
    description:
      "Containerized microservices deployment system with automated CI/CD and monitoring for 200+ internal users.",
    image: "/cloud-deployment-pipeline.jpg",
    tech: ["Docker", "GitHub Actions", "GCP", "Kubernetes"],
    github: "#",
    demo: "#",
  },
  {
    title: "Data Pipeline Orchestrator",
    description: "Scalable ETL pipeline for processing engineering data with real-time validation and error handling.",
    image: "/data-pipeline-dashboard.jpg",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Document Processor",
    description:
      "Intelligent document processing system using LLMs to extract and structure engineering specifications.",
    image: "/ai-document-processing.png",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of automation tools, AI systems, and scalable applications delivering real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold tracking-tight text-balance">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-cyan-400/10 text-cyan-400 border-cyan-400/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-xl border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Glow Effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
