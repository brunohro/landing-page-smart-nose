"use client"

import {
  Activity,
  FlaskConical,
  LayoutDashboard,
  Settings,
  Database,
  Radar,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion"

const sensors = [
  { name: "MQ-2", value: "412", unit: "ppm", trend: "+2.4%" },
  { name: "MQ-3", value: "188", unit: "ppm", trend: "-1.1%" },
  { name: "MQ-135", value: "326", unit: "ppm", trend: "+0.8%" },
  { name: "DHT11", value: "24.6", unit: "°C", trend: "+0.2%" },
]

const experiments = ["Fermentação #18", "Café torrado", "Vinho tinto", "Ar ambiente"]

// pre-computed line points for two series
const lineA = "0,70 40,52 80,58 120,34 160,40 200,22 240,30 280,14 320,20 360,8"
const lineB = "0,86 40,80 80,72 120,76 160,60 200,66 240,52 280,58 320,44 360,48"

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plataforma"
          title="O SmartNose em ação"
          description="Uma interface web completa para acompanhar experimentos, visualizar gráficos e analisar dados em tempo real."
        />

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl backdrop-blur glow-neon">
            {/* window bar */}
            <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-accent/60" />
              <span className="size-3 rounded-full bg-primary/60" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                app.smartnose.io/dashboard
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                Online
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
              {/* sidebar */}
              <aside className="hidden flex-col gap-1 border-r border-border bg-background/40 p-4 md:flex">
                <div className="mb-3 flex items-center gap-2 px-2">
                  <Radar className="size-4 text-primary" />
                  <span className="text-sm font-semibold">SmartNose</span>
                </div>
                {[
                  { icon: LayoutDashboard, label: "Visão geral", active: true },
                  { icon: FlaskConical, label: "Experimentos" },
                  { icon: Activity, label: "Sensores" },
                  { icon: Database, label: "Dados" },
                  { icon: Settings, label: "Configurações" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                      item.active
                        ? "bg-primary/15 font-medium text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </span>
                ))}
                <div className="mt-4 rounded-lg border border-border p-3">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    Experimentos
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {experiments.map((e, i) => (
                      <li
                        key={e}
                        className={`truncate text-xs ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* main */}
              <div className="p-5">
                {/* sensor cards */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {sensors.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-border bg-background/50 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-muted-foreground">
                          {s.name}
                        </span>
                        <span className="text-[11px] text-accent">{s.trend}</span>
                      </div>
                      <p className="mt-2 text-xl font-semibold">
                        {s.value}
                        <span className="ml-1 text-xs font-normal text-muted-foreground">
                          {s.unit}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {/* line chart */}
                  <div className="rounded-xl border border-border bg-background/50 p-4 lg:col-span-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Leituras dos sensores</p>
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-primary" /> MQ-2
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-accent" /> MQ-135
                        </span>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 360 100"
                      preserveAspectRatio="none"
                      className="mt-4 h-36 w-full"
                      aria-hidden="true"
                    >
                      <polyline
                        points={lineA}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points={lineB}
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* heatmap */}
                  <div className="rounded-xl border border-border bg-background/50 p-4">
                    <p className="text-sm font-medium">Heatmap de correlação</p>
                    <div className="mt-4 grid grid-cols-6 gap-1">
                      {Array.from({ length: 36 }).map((_, i) => {
                        const intensity = ((i * 37) % 100) / 100
                        return (
                          <span
                            key={i}
                            className="aspect-square rounded-[3px]"
                            style={{
                              backgroundColor: `rgba(34, 211, 238, ${0.12 + intensity * 0.8})`,
                            }}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* pairplot */}
                <div className="mt-4 rounded-xl border border-border bg-background/50 p-4">
                  <p className="text-sm font-medium">Pairplot dos sensores</p>
                  <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="relative aspect-square overflow-hidden rounded-md border border-border bg-deep/40"
                      >
                        {Array.from({ length: 6 }).map((_, j) => (
                          <span
                            key={j}
                            className="absolute size-1 rounded-full bg-primary/70"
                            style={{
                              left: `${((i + j) * 13) % 80 + 8}%`,
                              top: `${((i * 7 + j * 19) % 80) + 8}%`,
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button size="lg" render={<a href="#" />} className="glow-neon">
              Ver Plataforma
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
