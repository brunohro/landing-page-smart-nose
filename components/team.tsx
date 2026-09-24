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
    github: "https://github.com/brunohro/",
    linkedin: "https://www.linkedin.com/in/brunohro/",
    email: "brunoh.rodrigues27@gmail.com",
  },
  {
    name: "Francisco Ary",
    role: "Orientador",
    image: "/team/ary.png",
    description:
      "Coordenação científica e acompanhamento do desenvolvimento do projeto.",
    github: "#", // FALTANDO LINK DO GITHUB
    linkedin: "https://www.linkedin.com/in/ary-souza-7a6a802a6/",
    email: "francisco.alves@escolar.ifrn.edu.br",
  },
  {
    name: "Hanniel Freitas",
    role: "Orientador",
    image: "/team/Hanniel.png",
    description:
      "Coordenação científica e acompanhamento do desenvolvimento do projeto.",
    github: "#", // FALTANDO LINK DO GITHUB
    linkedin: "https://www.linkedin.com/in/hanniel-freitas-35899322/",
    email: "hanniel.freitas@escolar.ifrn.edu.br",
  },
  {
    name: "João Pedro",
    role: "Graduando em Análise e Desenvolvimento de Sistemas",
    image: "/team/joao-pedro.png",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "#", // FALTANDO LINK DO GITHUB
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro58/",
    email: "silva.neto1@escolar.ifrn.edu.br",
  },
  {
    name: "João Victor",
    role: "Graduando em Análise e Desenvolvimento de Sistemas",
    image: "/team/joao-victor.jpeg",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "https://github.com/jvsouza02",
    linkedin: "#",
    email: "joao.faustino@escolar.ifrn.edu.br",
  },
  {
    name: "Luana Gomes",
    role: "Graduanda em Análise e Desenvolvimento de Sistemas",
    image: "/team/Luana.jpg",
    description:
      "Desenvolvimento da plataforma SmartNose, integração entre hardware e software.",
    github: "#",  // FALTANDO LINK DO GITHUB
    linkedin: "https://www.linkedin.com/in/luanagomes76/",
    email: "luana.gomes@escolar.ifrn.edu.br",
  },
  {
    name: "Leandro Luttiane",
    role: "Orientador",
    image: "/team/Leandro.jpeg",
    description:
      "Coordenação científica e acompanhamento do desenvolvimento do projeto.",
    github: "#", // FALTANDO LINK DO GITHUB
    linkedin: "https://www.linkedin.com/in/leandro-luttiane-da-silva-linhares-540878254/",
    email: "luttiane.leandro@escolar.ifrn.edu.br",
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
          width={600}
          height={600}
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
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-4 w-4 hover:text-primary transition" />
          </a>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-4 w-4 hover:text-primary transition" />
          </a>

          <a
            href={`mailto:${member.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
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