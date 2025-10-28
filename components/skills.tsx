import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code2, Layers, Wrench, Database, Cloud, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Flask", "FastAPI", "Next.js", "React", "n8n", "Express"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Docker", "GitHub Actions", "Git", "Linux", "VS Code", "Postman"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "MongoDB", "Convex", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["GCP", "Cloud Run", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    skills: ["OpenAI", "LangChain", "n8n", "Workflow Automation", "LLMs"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, intelligent automation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-cyan-400/10">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
