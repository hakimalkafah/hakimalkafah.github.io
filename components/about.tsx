import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
        </div>

        <Card className="p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer passionate about solving complex problems through automation and intelligent
              systems. My work focuses on building tools that deliver measurable impact—whether that's saving thousands
              of engineering hours, streamlining workflows, or enabling teams to work more efficiently.
            </p>
            <p>
              At Ford Motor Company, I've developed automation systems that process millions of data points and serve
              hundreds of internal users. Outside of work, I explore the intersection of AI and workflow automation,
              building tools that leverage modern LLMs and cloud infrastructure to solve real-world challenges.
            </p>
            <p>
              I believe in writing clean, maintainable code and designing systems that are both scalable and reliable.
              Every project is an opportunity to learn something new and push the boundaries of what's possible with
              technology.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Button size="lg" className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-2xl px-8">
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
