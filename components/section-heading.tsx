import type { ReactNode } from "react"
import { Reveal } from "@/components/motion"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  className?: string
}) {
  return (
    <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
