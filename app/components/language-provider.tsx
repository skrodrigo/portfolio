'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

type Locale = 'pt-BR' | 'en'

type Dictionary = {
  home: {
    role: string
    summary: string
    skills: string
    certifications: string
    education: string
    experience: string
    techStack: string
    projects: string
    blog: string
  }
  summary: {
    text: string
  }
  skills: {
    text: string
  }
  certifications: {
    awsTitle: string
    awsUrl: string
    aiAssistedTitle: string
    aiAssistedUrl: string
    genAiTitle: string
    genAiUrl: string
  }
  experience: {
    now: string
    sintesyTitle: string
    sintesyDescription: string
    compassTitle: string
    compassDescription: string
  }
  education: {
    bachelorsTitle: string
    bachelorsOrg: string
    technicalTitle: string
    technicalOrg: string
  }
  blog: {
    empty: string
  }
  project: {
    landingPage: string
    dashboard: string
    github: string
    figma: string
    download: string
  }
}

const dictionaries: Record<Locale, Dictionary> = {
  'en': {
    home: {
      role: 'Developer',
      summary: 'Summary',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
      experience: 'Experience',
      techStack: 'Tech Stack',
      projects: 'Projects',
      blog: 'Blog',
    },
    summary: {
      text: 'Full-Stack Developer with a Front-End focus, 2+ years of experience, and enthusiastic about building modern, scalable SaaS products. Seeking opportunities to grow technically, collaborate with high-performing teams, and contribute to high-impact projects.',
    },
    skills: {
      text: 'Next.js | React.js | TypeScript | Node.js | AWS | Git | Scrum | Kanban | Docker | AI/ML | REST APIs | PostgreSQL | CI/CD | Grafana | Redux / Zustand | React Query / TanStack Query | Jest / Vitest | Python | Django | Express.js | NestJS | Go',
    },
    certifications: {
      awsTitle: 'AWS Certified Cloud Practitioner',
      awsUrl:
        'https://cp.certmetrics.com/amazon/en/public/verify/credential/b09f3b267d6c43dca183f0d0f1822cee',
      aiAssistedTitle: 'AI-Assisted Certified Professional',
      aiAssistedUrl:
        'https://learning.compass.uol/admin/tool/certificate/view.php?code=2658723567JR',
      genAiTitle: 'GenAI Technical Certification',
      genAiUrl:
        'https://learning.compass.uol/admin/tool/certificate/view.php?code=4955219298JR',
    },
    experience: {
      now: 'Now',
      sintesyTitle: 'Front-End Developer - Sintesy',
      sintesyDescription:
        'Advanced use of AI agents (Windsurf, Cursor).\n\nAdvanced prompt engineering techniques and intensive AI-assisted code generation.\n\nOrchestration of agents and multi-agent workflows (Roles, Skills, Plan Mode, MCP).\n\nBuilding optimized landing pages with Astro and React.\n\nBuilding a blog with Astro to index more pages.\n\nLanding page internationalization with i18n, supporting multiple languages.\n\nEnd-to-end development of the platform using Next.js 16 (App Router), TanStack Query, Nuqs, React, Tailwind CSS, Context API, Zod, and React Hook Form.\n\nUsing modern frontend rendering strategies: SSG and SSR.\n\nImplementing embedded Stripe checkout.\n\nBackend + frontend API integrations (e.g. Meta Ads conversions).\n\nDesigning screens in Figma following usability heuristics and a Design System.\n\nImplementing CI/CD pipelines and deploying to AWS.\n\nImplementing frontend observability with Grafana and Prometheus.',
      compassTitle: 'AI & ML with AWS Intern - Compass UOL',
      compassDescription:
        'End-to-end development of intelligent chatbots, working across frontend and backend.\n\nUsing Python and Node.js, with libraries like LangChain to build conversational flows.\n\nIntegrating with AWS Bedrock language models.\n\nOrchestrating dynamic prompts with AWS Lambda and API Gateway.\n\nUsing S3 for storage.\n\nManaging EC2, setting up containerized environments with Docker and Node.js.\n\nImplementing monitoring and real-time observability with CloudWatch Logs.\n\nParticipating in agile sprints with Scrum and Kanban (daily meetings, refinements, and deliveries).',
    },
    education: {
      bachelorsTitle: "Bachelor's in Information Systems",
      bachelorsOrg: 'Uninassau Juazeiro do Norte (2023 - 2026)',
      technicalTitle: 'Technical Degree in Information Technology',
      technicalOrg: 'EEEP Antonia Nedina Onofre de Paiva (2020 - 2022)',
    },
    blog: {
      empty: 'No posts found yet. Come back soon!',
    },
    project: {
      landingPage: 'Landing Page',
      dashboard: 'Dashboard',
      github: 'Github',
      figma: 'Figma',
      download: 'Download',
    },
  },
  'pt-BR': {
    home: {
      role: 'Desenvolvedor',
      summary: 'Resumo',
      skills: 'Habilidades',
      certifications: 'Certificações',
      education: 'Formação',
      experience: 'Experiência',
      techStack: 'Stack',
      projects: 'Projetos',
      blog: 'Blog',
    },
    summary: {
      text: 'Desenvolvedor Full-Stack com foco em Front-End, +2 anos de experiência, entusiasta em soluções SaaS, Web modernas e escaláveis. Busco oportunidades para evoluir tecnicamente, colaborar com times de alto nível e contribuir para projetos de grande impacto.',
    },
    skills: {
      text: 'Next.js | React.js | TypeScript | Node.js | AWS | Git | Scrum | Kanban | Docker | AI/ML | REST APIs | PostgreSQL | CI/CD | Grafana | Redux / Zustand | React Query / TanStack Query | Jest / Vitest | Python | Django | Express.js | NestJS | Go',
    },
    certifications: {
      awsTitle: 'AWS Certified Cloud Practitioner',
      awsUrl:
        'https://cp.certmetrics.com/amazon/en/public/verify/credential/b09f3b267d6c43dca183f0d0f1822cee',
      aiAssistedTitle: 'AI-Assisted Certified Professional',
      aiAssistedUrl:
        'https://learning.compass.uol/admin/tool/certificate/view.php?code=2658723567JR',
      genAiTitle: 'GenAI Technical Certification',
      genAiUrl:
        'https://learning.compass.uol/admin/tool/certificate/view.php?code=4955219298JR',
    },
    experience: {
      now: 'Atual',
      sintesyTitle: 'Desenvolvedor Front-End - Sintesy',
      sintesyDescription:
        'Uso avançado de agentes de AI (Windsurf, Cursor).\n\nTécnicas avançadas de prompt engineering, geração intensiva de código com AI.\n\nOrquestração de agentes e multiagentes, Roles, Skills, Plan Mode, MCP.\n\nCriação de landing pages otimizadas com Astro e React.\n\nCriação de blog usando Astro para indexar mais páginas.\n\nInternacionalização da landing page com i18n, suportando vários idiomas.\n\nDesenvolvimento completo da plataforma utlizando Next.js 16 (App Router), TanStack Query, Nuqs, React, Tailwind CSS, Context API, Zod e React Hook Form.\n\nUso das mais atualizadas formas de renderização no frontend: SSG, SSR.\n\nImplementação de checkout transparente com Stripe.\n\nIntegração backend + frontend de APIs, como: conversões do Meta Ads.\n\nDesenho de telas no Figma seguindo heurísticas de usabilidade e Design System.\n\nImplementação de pipelines de CI/CD, e deploy na AWS.\n\nImplementação de observabilidade frontend com Grafana e Prometheus.',
      compassTitle: 'Estágio AI & ML with AWS – Compass UOL',
      compassDescription:
        'Desenvolvimento de chatbots inteligentes de ponta a ponta, atuando no frontend e backend.\n\nUtilizando Python e Node.js, com bibliotecas como LangChain para criação de fluxos conversacionais.\n\nIntegração com modelos de linguagem do AWS Bedrock.\n\nOrquestração de prompts dinâmicos utilizando AWS Lambda e API Gateway.\n\nS3 para armazenamento.\n\nGerenciamento de EC2, configurando ambientes conteinerizados com Docker e Nodejs.\n\nImplementação e monitoramento e observabilidade em tempo real com CloudWatch Logs.\n\nParticipação de sprints ágeis com Scrum e Kanban, Daily Meetings, refinamentos e entregas.',
    },
    education: {
      bachelorsTitle: 'Bacharelado em Sistemas de Informação',
      bachelorsOrg: 'Uninassau Juazeiro do Norte (2023 - 2026)',
      technicalTitle: 'Curso Técnico em Informática',
      technicalOrg: 'EEEP Antonia Nedina Onofre de Paiva (2020 - 2022)',
    },
    blog: {
      empty: 'Nenhum post encontrado ainda. Volte em breve!',
    },
    project: {
      landingPage: 'Landing Page',
      dashboard: 'Dashboard',
      github: 'Github',
      figma: 'Figma',
      download: 'Download',
    },
  },
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('locale')
  if (stored === 'pt-BR' || stored === 'en') return stored

  const languages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  const normalized = languages
    .filter(Boolean)
    .map(l => l.toLowerCase())

  if (normalized.some(l => l.startsWith('pt'))) return 'pt-BR'
  return 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale())

  useEffect(() => {
    const initial = getInitialLocale()
    setLocaleState(initial)
    document.documentElement.lang = initial
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem('locale', next)
    } catch {
      // ignore
    }
    document.documentElement.lang = next
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'pt-BR' : 'en')
  }, [locale, setLocale])

  const value = useMemo<LanguageContextValue>(() => {
    return { locale, setLocale, toggleLocale, t: dictionaries[locale] }
  }, [locale, setLocale, toggleLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useI18n must be used within LanguageProvider')
  }
  return ctx
}
