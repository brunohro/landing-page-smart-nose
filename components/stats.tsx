"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { RevealGroup, RevealItem } from "@/components/motion"

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const stats = [
  { value: <CountUp to={4} suffix="+" />, label: "Sensores principais" },
  { value: <CountUp to={100} suffix="%" />, label: "Baseado em IoT" },
  { value: "Tempo real", label: "Monitoramento contínuo" },
  { value: "Baixo custo", label: "Arquitetura aberta" },
]

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat, i) => (
            <RevealItem
              key={i}
              className="bg-card/60 p-8 text-center"
            >
              <p className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
