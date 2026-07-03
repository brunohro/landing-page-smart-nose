import {
  Activity,
  FlaskConical,
  History,
  FileSpreadsheet,
  FileText,
  Grid3x3,
  ScatterChart,
  SlidersHorizontal,
  GitCompare,
  Radio,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const features = [
  { icon: Activity, title: "Monitoramento em tempo real" },
  { icon: FlaskConical, title: "Controle de experimentos" },
  { icon: History, title: "Histórico completo" },
  { icon: FileSpreadsheet, title: "Exportação CSV" },
  { icon: FileText, title: "Exportação PDF" },
  { icon: Grid3x3, title: "Heatmap" },
  { icon: ScatterChart, title: "Pairplot" },
  { icon: SlidersHorizontal, title: "Filtros digitais" },
  { icon: GitCompare, title: "Comparação entre experimentos" },
  { icon: Radio, title: "Controle remoto do hardware" },
]

export function Features() {
  return (
    <section id="recursos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recursos inteligentes"
          title="Tudo o que sua pesquisa precisa"
          description="Funcionalidades pensadas para acelerar experimentos científicos e a análise de dados de gases."
        />

        <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <RevealItem
              key={feature.title}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:glow-aqua"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <feature.icon className="size-5" />
              </span>
              <h3 className="text-pretty text-sm font-medium leading-snug">
                {feature.title}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
