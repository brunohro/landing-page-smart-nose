import { Radar } from "lucide-react"
import { GithubIcon } from "@/components/icons"

const groups = [
  {
    title: "Projeto",
    links: ["Visão geral", "Solução", "Roadmap"],
  },
  {
    title: "Tecnologia",
    links: ["Hardware", "Dashboard", "Tecnologias"],
  },
  {
    title: "Pesquisa",
    links: ["Aplicações", "Diferenciais", "Publicações"],
  },
  {
    title: "Contato",
    links: ["E-mail", "GitHub", "Comunidade"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2.5fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary glow-neon">
                <Radar className="size-5" />
              </span>
              <span className="text-base font-semibold tracking-tight">
                Smart<span className="text-accent">Nose</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              SmartNose • Electronic Nose Platform. Monitoramento inteligente de
              compostos voláteis com IoT e hardware aberto.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>SmartNose • Electronic Nose Platform</p>
          <p>© {new Date().getFullYear()} SmartNose. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
