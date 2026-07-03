import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { Reveal } from "@/components/motion"

export function CTA() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border p-10 text-center sm:p-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.22),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-deep/40"
        />
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          O futuro do monitoramento de compostos voláteis{" "}
          <span className="text-gradient">começa aqui.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Explore o SmartNose, contribua com o projeto e leve a detecção
          inteligente de gases para a sua pesquisa.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button size="lg" render={<a href="#solucao" />} className="glow-neon">
            Conheça o Projeto
            <ArrowRight className="size-4" />
          </Button>
          <Button size="lg" variant="outline" render={<a href="#" />}>
            <GithubIcon className="size-4" />
            Ver GitHub
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
