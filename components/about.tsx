import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="education" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Education</h2>
        </div>

        <Card className="p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">B.S. Computer Science</h3>
              <p className="text-muted-foreground">Eastern Michigan University • Dec 2022</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">A.A.S. Computer Information Systems</h3>
              <p className="text-muted-foreground">Henry Ford College • May 2020</p>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 space-y-2">
            <p className="text-muted-foreground">
              <span className="font-semibold">Location:</span> Dearborn, MI
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Email:</span> hakimalkafah@gmail.com
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Phone:</span> 313-482-8667
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold">LinkedIn:</span> linkedin.com/in/hakim-alkafah
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
