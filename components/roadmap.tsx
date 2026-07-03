import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const milestones = [
  { phase: "Pesquisa", text: "Levantamento de sensores, custos e estado da arte.", done: true },
  { phase: "Protótipo", text: "Montagem do hardware com Arduino e ESP32.", done: true },
  { phase: "Experimentos", text: "Coleta de dados em cenários controlados.", done: true },
  { phase: "Dashboard", text: "Plataforma web para visualização e controle.", done: true },
  { phase: "Análise de Dados", text: "Estatística, heatmaps e pairplots.", done: false },
  { phase: "Machine Learning", text: "Modelos para classificação de odores.", done: false },
  { phase: "Reconhecimento Inteligente de Odores", text: "Identificação automática de padrões voláteis.", done: false },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="A jornada do SmartNose"
          description="Da concepção ao reconhecimento inteligente de odores baseado em machine learning."
        />

        <RevealGroup className="relative mt-16 pl-8">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent"
          />
          {milestones.map((m) => (
            <RevealItem key={m.phase} className="relative pb-10 last:pb-0">
              <span
                className={`absolute -left-8 top-1 flex size-4 items-center justify-center rounded-full border-2 ${
                  m.done
                    ? "border-accent bg-accent glow-aqua"
                    : "border-primary/50 bg-background"
                }`}
              />
              <div className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">{m.phase}</h3>
                  {m.done ? (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-medium text-accent">
                      Concluído
                    </span>
                  ) : (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
                      Em breve
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
