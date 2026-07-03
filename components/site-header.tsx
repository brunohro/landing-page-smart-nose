"use client"

import { useEffect, useState } from "react"
import { Menu, Radar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#hardware", label: "Hardware" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#roadmap", label: "Roadmap" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary glow-neon">
            <Radar className="size-5" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            Smart<span className="text-accent">Nose</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" render={<a href="#" />}>
            <GithubIcon className="size-4" />
            GitHub
          </Button>
          <Button size="sm" render={<a href="#solucao" />} className="glow-neon">
            Conheça o Projeto
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full" render={<a href="#solucao" />}>
              Conheça o Projeto
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
