import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"

const steps = [
  "Sensores detectam VOCs",
  "Arduino realiza aquisição",
  "ESP32 transmite via Wi-Fi",
  "Servidor recebe os dados",
  "Dados armazenados",
  "Dashboard apresenta gráficos",
  "Análise estatística",
  "Exportação CSV e PDF",
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do gás ao conhecimento, em tempo real"
          description="Cada medição percorre um fluxo automatizado até virar gráficos e relatórios prontos para análise."
        />

        <RevealGroup className="relative mt-16">
          {/* horizontal connector line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealItem key={step} className="relative">
                <div className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-sm font-semibold text-primary glow-neon">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 text-pretty font-medium leading-relaxed">
                  {step}
                </p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
