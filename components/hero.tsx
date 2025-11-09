"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, FileText } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(34, 211, 238, 0.3)"
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }} />

      {/* Gradient Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-xs bg-card/50 backdrop-blur-sm border border-cyan-400/20"
            >
              1,100+ engineer hours saved annually
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-xs bg-card/50 backdrop-blur-sm border border-cyan-400/20"
            >
              50% faster deployments
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">Hakim Alkafah</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Software Engineer · Automation Developer
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I automate workflows, build internal tools, and ship full-stack applications. Experienced with Python/Flask,
            React, GCP Cloud Run, and GitHub Actions CI/CD.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-2xl px-8"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              asChild
            >
              <a href="/Hakim_Alkafah_resume.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-cyan-400/10 hover:text-cyan-400"
              asChild
            >
              <a
                href="https://linkedin.com/in/hakim-alkafah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-cyan-400/10 hover:text-cyan-400"
              asChild
            >
              <a href="mailto:hakimalkafah@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
