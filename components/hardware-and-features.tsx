import {
  Flame,
  Wine,
  Atom,
  Wind,
  Thermometer,
  Wifi,
  Cpu,
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

const hardware = [
  { icon: Flame, name: "MQ-2", desc: "Detecta fumaça e gases combustíveis", tag: "Sensor" },
  { icon: Wine, name: "MQ-3", desc: "Detecta álcool e etanol", tag: "Sensor" },
  { icon: Atom, name: "MQ-8", desc: "Detecta hidrogênio", tag: "Sensor" },
  { icon: Wind, name: "MQ-135", desc: "Qualidade do ar e gases tóxicos", tag: "Sensor" },
  { icon: Thermometer, name: "DHT11", desc: "Temperatura e umidade", tag: "Ambiental" },
  { icon: Wifi, name: "ESP32", desc: "Comunicação IoT via Wi-Fi", tag: "Conectividade" },
  { icon: Cpu, name: "Arduino Mega", desc: "Aquisição dos sensores", tag: "Controle" },
]

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

export function HardwareAndFeatures() {
  return (
    <section id="hardware" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          {/* Hardware */}
          <div>
            <SectionHeading
              eyebrow="Hardware"
              title="Sensores e módulos de baixo custo"
              description="Componentes acessíveis, combinados para formar um Nariz Eletrônico completo."
            />
            <RevealGroup className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card/50">
              {hardware.map((item) => (
                <RevealItem
                  key={item.name}
                  className="group flex items-center gap-4 p-4 transition-colors hover:bg-primary/5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <item.icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-mono text-sm font-semibold tracking-tight">
                        {item.name}
                      </h3>
                      <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Features */}
          <div>
            <SectionHeading
              eyebrow="Recursos inteligentes"
              title="Tudo o que sua pesquisa precisa"
              description="Funcionalidades pensadas para acelerar experimentos científicos e a análise de dados de gases."
            />
            <RevealGroup className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <RevealItem
                  key={feature.title}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:glow-aqua"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <feature.icon className="size-4" />
                  </span>
                  <h3 className="text-pretty text-sm font-medium leading-snug">
                    {feature.title}
                  </h3>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}