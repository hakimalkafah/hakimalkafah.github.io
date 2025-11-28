"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Construction Crew Scheduler",
    bullets: [
      "Built a multi-user scheduling app with calendar views by crew and job, conflict detection, and role-based access to prevent double-booking and improve crew visibility.",
      "Integrated real-time updates with Convex for instant schedule synchronization across users and implemented Clerk authentication with role-based permissions.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Clerk", "Convex", "Vercel"],
    year: "2025",
    status: "Live",
    demo: "https://contractor-scheduler-alpha.vercel.app/",
  },
  {
    title: "StoreOps Task Scheduler",
    bullets: [
      "Built a task-orchestration system with JWT authentication and rules-based auto-assignment to streamline store operations, packaged with Docker Compose for deployment.",
      "Designed PostgreSQL schema with task dependencies and scheduling logic, exposing RESTful endpoints for task creation, assignment, and status tracking.",
    ],
    tech: ["React", "Django", "PostgreSQL", "Docker", "Supabase", "Vercel"],
    year: "2024 – Present",
    status: "Live",
    demo: "https://task-manager-frontend-mu-lime.vercel.app",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications built with modern frameworks and deployed to production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 p-6 flex flex-col"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                      <Badge variant="secondary" className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20 text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-cyan-400 flex-shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

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
              </div>

              {project.demo !== "#" && (
                <div className="mt-4 pt-4 border-t border-border/20">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 border border-cyan-400/30 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
