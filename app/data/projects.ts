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
        'A Sintesy escuta suas ideias, reuniões e planejamentos e cria uma linha contínua de raciocínio com notas, tópicos, checklists e muito mais. Otimizando seus fluxos de trabalho em 10x.',
    },
    image: '/sintesy.png',
    LandingPage: 'https://sintesy.me/',
    linkGithub: 'https://github.com/skrodrigo',
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
  {
    title: 'Sacola',
    description: {
      en: 'Mobile shopping list app with budget control.',
      'pt-BR': 'Aplicativo mobile de lista de compras com controle de orçamento.',
    },
    image: '/Sacola.png',
    linkGithub: 'https://github.com/skrodrigo/sacola',
    downloadLink: 'https://github.com/skrodrigo/sacolafacil/releases/tag/v1.0.0',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'NativeWind',
      'React Hook Form',
      'TanStack Query',
      'Hono',
      'Prisma',
      'PostgreSQL',
    ],
    colorBadge: 'bg-green-500/20 text-green-500',
  },
  {
    title: 'Klip AI',
    description: {
      en: 'Klipai is a SaaS platform that automatically turns long videos into short, social-ready clips. Users submit a video, and the system processes it asynchronously to extract the best moments, generate captions, and deliver final clips optimized for social media.',
      'pt-BR':
        'Klipai é uma plataforma SaaS que transforma automaticamente vídeos longos em clipes curtos prontos para redes sociais. O usuário envia um vídeo e o sistema processa de forma assíncrona para extrair os melhores momentos, gerar legendas e entregar clipes finais otimizados para social.',
    },
    image: '/klipai.png',
    LandingPage: 'https://klipai.com.br/',
    linkGithub: 'https://github.com/skrodrigo/klipai',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'Zod',
      'React Hook Form',
      'TanStack Query',
      'Python',
      'Django',
      'PostgreSQL',
      'Celery',
      'RabbitMQ',
      'FFmpeg',
      'Whisper',
    ],
    colorBadge: 'bg-purple-500/20 text-purple-500',
  },
  {
    title: 'Pumkin',
    description: {
      en: 'A chat platform integrated with multiple AI models, where users can switch between models, create new chats, organize conversations and compare responses.',
      'pt-BR':
        'Uma plataforma de chat integrada com múltiplos modelos de IA, onde usuários podem alternar entre modelos, criar novos chats, organizar conversas e comparar respostas.',
    },
    image: '/pumkin.png',
    LandingPage: 'https://pumkin.com.br/',
    linkGithub: 'https://github.com/skrodrigo/pumkin',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'BetterAuth',
      'Prisma',
      'AI-SDK',
      'AI SDK ELEMENTS',
      'Stripe',
      'GOOGLE SSO',
      'NeonDB',
      'Zod',
      'React Hook Form',
    ],
    colorBadge: 'bg-orange-500/5 text-orange-300',
  },
]

export function getProjects(locale: Locale): Project[] {
  return projectsLocalized.map(p => ({
    ...p,
    description: p.description[locale],
  }))
}

export const projects: Project[] = getProjects('en')
