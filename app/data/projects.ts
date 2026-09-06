import type { Project } from '@/app/types/interfaces'

type Locale = 'pt-BR' | 'en'

type ProjectLocalized = Omit<Project, 'description'> & {
  description: Record<Locale, string>
}

const projectsLocalized: ProjectLocalized[] = [
  {
    title: 'Sintesy',
    description: {
      en: 'Sintesy listens to your ideas, meetings, planning sessions and creates a continuous line of reasoning with notes, topics, checklists and much more! Optimizing your workflows by 10x.',
      'pt-BR':
        'O Sintesy escuta suas ideias, reuniões e planejamentos e cria uma linha contínua de raciocínio com notas, tópicos, checklists e muito mais. Otimizando seus fluxos de trabalho em 10x.',
    },
    image: '/sintesy.png',
    LandingPage: 'https://dashboard.sintesy.me/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'Stripe',
      'Zod',
      'React Hook Form',
    ],
    colorBadge: 'bg-zinc-500/20 text-zinc-100',
  },
]

export function getProjects(locale: Locale): Project[] {
  return projectsLocalized.map(p => ({
    ...p,
    description: p.description[locale],
  }))
}

export const projects: Project[] = getProjects('en')
