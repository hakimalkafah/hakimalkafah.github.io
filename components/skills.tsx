import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "React", "PostgreSQL", "Docker"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Flask", "Next.js", "GitHub Actions", "CI/CD", "REST APIs"],
  },
  {
    title: "Platforms & Databases",
    skills: ["GCP (Cloud Run)", "PostgreSQL", "Docker", "TDD", "ADFS/SSO"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            return (
              <Card
                key={index}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold tracking-tight mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-cyan-400/10 text-cyan-400 border-cyan-400/20"
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
