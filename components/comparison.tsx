import { Check, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion"

const rows = [
  "Baixo custo",
  "Código aberto",
  "Arquitetura IoT",
  "Dashboard Web",
  "Exportação CSV",
  "Exportação PDF",
  "Análise gráfica",
  "Controle remoto",
  "Flexibilidade para pesquisa",
]

export function Comparison() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="SmartNose vs. equipamentos comerciais"
          description="Uma alternativa aberta e acessível, sem abrir mão dos recursos profissionais."
        />

        <Reveal className="mt-16 overflow-hidden rounded-2xl border border-border bg-card/50">
          <div className="grid grid-cols-3 border-b border-border bg-background/40">
            <div className="px-5 py-4 text-sm font-medium text-muted-foreground">
              Recurso
            </div>
            <div className="px-5 py-4 text-center text-sm font-semibold text-accent">
              SmartNose
            </div>
            <div className="px-5 py-4 text-center text-sm font-medium text-muted-foreground">
              Comerciais
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-3 items-center ${
                i % 2 === 1 ? "bg-background/20" : ""
              }`}
            >
              <div className="px-5 py-4 text-sm">{row}</div>
              <div className="flex justify-center px-5 py-4">
                <span className="flex size-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-4" />
                </span>
              </div>
              <div className="flex justify-center px-5 py-4">
                <span className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <X className="size-4" />
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
