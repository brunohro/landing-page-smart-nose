import Image from "next/image"
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading"
import { RevealGroup, RevealItem } from "@/components/motion"


const team = [
  {
    name: "Bruno Henrique",
    role: "Graduando em Análise e Desenvolvimento de Sistemas",
    image: "/team/bruno.jpg",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
      {
    name: "Francisco Ary",
    role: "Orientador",
    image: "/team/ary.png",
    description:
      "Coordenação científica e acompanhamento do desenvolvimento do projeto.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
      {
    name: "Hanniel Freitas",
    role: "Orientador",
    image: "/team/maria.jpg",
    description:
      "Coordenação científica e acompanhamento do desenvolvimento do projeto.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
  {
    name: "João Pedro",
    role: "Graduando em Análise e Desenvolvimento de Sistemas",
    image: "team/joao-pedro.png",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
  {
    name: "João Victor",
    role: "Graduando em Análise e Desenvolvimento de Sistemas",
    image: "/team/maria.jpg",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
    {
    name: "Luana Gomes",
    role: "Graduanda em Análise e Desenvolvimento de Sistemas",
    image: "/team/luana.png",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
    {
    name: "Leandro Luttiane",
    role: "Orientador",
    image: "/team/maria.jpg",
    description:
      "Coordenação científica e acompanhamento do desenvolvimento do projeto.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
  
]

export function Team() {
  return (
    <section id="equipe" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Equipe"
          title="Conheça nossa equipe"
          description="Pesquisadores e desenvolvedores responsáveis pelo SmartNose."
        />

<RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {team.map((member) => (
    <RevealItem
      key={member.name}
      className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      {/* Imagem */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {member.name}
        </h3>

        <p className="text-sm text-primary">
          {member.role}
        </p>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {member.description}
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <a href={member.github}>
            <FaGithub className="h-4 w-4 hover:text-primary transition" />
          </a>

          <a href={member.linkedin}>
            <FaLinkedin className="h-4 w-4 hover:text-primary transition" />
          </a>

          <a href={`mailto:${member.email}`}>
            <Mail className="h-4 w-4 hover:text-primary transition" />
          </a>
        </div>
      </div>
    </RevealItem>
  ))}
</RevealGroup>

      </div>
    </section>
  )
}