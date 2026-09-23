import { DollarSign, Lock, FlaskConical, Cpu, CircuitBoard, Wifi, Server, Database, LineChart } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const problems = [
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

const flow = [
  { icon: CircuitBoard, title: "Sensores MQ", text: "Captação dos gases voláteis (VOCs)." },
  { icon: Cpu, title: "Arduino Mega", text: "Aquisição analógica dos sensores." },
  { icon: Wifi, title: "ESP32", text: "Transmissão dos dados via Wi-Fi." },
  { icon: Server, title: "Servidor", text: "Recebimento e processamento." },
  { icon: Database, title: "Banco de Dados", text: "Armazenamento estruturado." },
  { icon: LineChart, title: "Dashboard Web", text: "Visualização e análise." },
]

export function ProblemAndSolution() {
  return (
    <section id="problema" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,42,67,0.6),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          {/* Problema */}
          <div>
            <SectionHeading
              eyebrow="O desafio"
              title="Monitorar compostos voláteis é caro e fechado"
              description="Os obstáculos que motivaram a criação de um Nariz Eletrônico acessível, aberto e flexível."
            />
            <RevealGroup className="mt-10 flex flex-col gap-4">
              {problems.map((item) => (
                <RevealItem
                  key={item.title}
                  className="group rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:glow-neon">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Solução */}
          <div>
            <SectionHeading
              eyebrow="Nossa solução"
              title={<>Um Nariz Eletrônico <span className="text-gradient">acessível e inteligente</span></>}
              description="Um pipeline completo, do sensor à análise científica, construído sobre hardware aberto e tecnologias IoT."
            />
            <RevealGroup className="relative mt-10 flex flex-col">
              {flow.map((step, i) => (
                <RevealItem key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < flow.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-11 h-[calc(100%-2rem)] w-px bg-border"
                    />
                  ) : null}
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent">
                    <step.icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1 pt-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold">{step.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}