import { Flame, Wine, Atom, Wind, Thermometer, Wifi, Cpu } from "lucide-react"
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

export function Hardware() {
  return (
    <section id="hardware" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hardware"
          title="Sensores e módulos de baixo custo"
          description="Componentes acessíveis e amplamente disponíveis, combinados para formar um Nariz Eletrônico completo."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hardware.map((item) => (
            <RevealItem
              key={item.name}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon className="size-5" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-5 font-mono text-lg font-semibold tracking-tight">
                {item.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
