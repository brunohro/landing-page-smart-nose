import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const techs = [
  "Arduino",
  "ESP32",
  "Python",
  "Django",
  "PostgreSQL",
  "Git",
  "GitHub",
  "IoT",
  "Pandas",
  "HTTP",
  "CSV",
]

export function Technologies() {
  return (
    <section id="tecnologias" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tecnologias"
          title="Construído com ferramentas abertas"
          description="Uma stack moderna e confiável, do firmware embarcado à análise de dados."
        />

        <RevealGroup className="mt-16 flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <RevealItem key={tech}>
              <span className="inline-flex items-center rounded-full border border-border bg-card/50 px-5 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                {tech}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
