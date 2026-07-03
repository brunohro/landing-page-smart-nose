"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Cpu, Network, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/particles"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-24"
    >
      <Particles className="pointer-events-none absolute inset-0 h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-[420px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div style={{ y: yText }} className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="size-3.5 text-accent" />
            Electronic Nose · IoT · Inteligência Embarcada
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-pretty text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">SmartNose</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-balance text-xl font-medium text-foreground sm:text-2xl"
          >
            Monitoramento Inteligente de Compostos Voláteis através de
            Inteligência Embarcada
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            Um sistema de Nariz Eletrônico de baixo custo capaz de detectar
            padrões de gases, armazenar dados em nuvem e transformar medições em
            conhecimento científico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" render={<a href="#solucao" />} className="glow-neon">
              Conheça o Projeto
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" render={<a href="#solucao" />}>
              Ver Arquitetura
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Cpu className="size-4 text-primary" /> ESP32 + Arduino Mega
            </span>
            <span className="inline-flex items-center gap-2">
              <Network className="size-4 text-accent" /> Arquitetura aberta IoT
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="animate-float relative mx-auto max-w-lg">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-2 backdrop-blur glow-neon">
              <Image
                src="/hero-enose.png"
                alt="Ilustração 3D do sistema de Nariz Eletrônico SmartNose com sensores, ESP32, nuvem e dashboard"
                width={720}
                height={720}
                priority
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
