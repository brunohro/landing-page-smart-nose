import { DollarSign, Lock, FlaskConical } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const items = [
  {
    icon: DollarSign,
    title: "Alto custo",
    text: "Equipamentos comerciais de detecção de gases possuem custo elevado, inviabilizando muitos laboratórios e pesquisas acadêmicas.",
  },
  {
    icon: Lock,
    title: "Arquiteturas fechadas",
    text: "Softwares proprietários limitam a customização, a integração de dados e o avanço de novas pesquisas científicas.",
  },
  {
    icon: FlaskConical,
    title: "Pouca flexibilidade",
    text: "Dificuldade para adaptar equipamentos a diferentes experimentos, sensores e cenários do mundo real.",
  },
]

export function Problem() {
  return (
    <section id="problema" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O desafio"
          title="Monitorar compostos voláteis ainda é caro e fechado"
          description="Os obstáculos que motivaram a criação de um Nariz Eletrônico acessível, aberto e flexível."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <RevealItem
              key={item.title}
              className="group rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:glow-neon">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
