import { Cpu, CircuitBoard, Wifi, Server, Database, LineChart, ArrowDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const flow = [
  { icon: CircuitBoard, title: "Sensores MQ", text: "Captação dos gases voláteis (VOCs)." },
  { icon: Cpu, title: "Arduino Mega", text: "Aquisição analógica dos sensores." },
  { icon: Wifi, title: "ESP32", text: "Transmissão dos dados via Wi-Fi." },
  { icon: Server, title: "Servidor", text: "Recebimento e processamento." },
  { icon: Database, title: "Banco de Dados", text: "Armazenamento estruturado." },
  { icon: LineChart, title: "Dashboard Web", text: "Visualização e análise." },
]

export function Solution() {
  return (
    <section id="solucao" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,42,67,0.6),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nossa solução"
          title={<>Um Nariz Eletrônico <span className="text-gradient">acessível e inteligente</span></>}
          description="Um pipeline completo, do sensor à análise científica, construído sobre hardware aberto e tecnologias IoT."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flow.map((step, i) => (
            <RevealItem key={step.title} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:glow-aqua">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <step.icon className="size-5" />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
              {i < flow.length - 1 ? (
                <ArrowDown
                  aria-hidden="true"
                  className="mx-auto mt-1 size-5 text-primary/50 sm:hidden"
                />
              ) : null}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
