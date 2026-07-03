import { Beer, Sprout, Factory, Globe2, Microscope, Wine, Dna } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const apps = [
  { icon: Beer, title: "Fermentação", text: "Acompanhamento de processos fermentativos." },
  { icon: Sprout, title: "Agricultura", text: "Maturação, qualidade e armazenamento." },
  { icon: Factory, title: "Indústria", text: "Controle de qualidade e segurança." },
  { icon: Globe2, title: "Meio Ambiente", text: "Monitoramento da qualidade do ar." },
  { icon: Microscope, title: "Pesquisa Científica", text: "Experimentos e coleta de dados." },
  { icon: Wine, title: "Bebidas", text: "Perfis aromáticos e validação sensorial." },
  { icon: Dna, title: "Biotecnologia", text: "Detecção de padrões biológicos voláteis." },
]

export function Applications() {
  return (
    <section id="aplicacoes" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Aplicações"
          title="De laboratórios à indústria"
          description="A flexibilidade do SmartNose permite aplicações em diversos setores e linhas de pesquisa."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <RevealItem
              key={app.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <span className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <app.icon className="size-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold">{app.title}</h3>
              <p className="relative mt-2 leading-relaxed text-muted-foreground">
                {app.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
