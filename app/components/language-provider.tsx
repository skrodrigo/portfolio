'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

type Locale = 'pt-BR' | 'en'

type Dictionary = {
  home: {
    role: string
    education: string
    experience: string
    techStack: string
    projects: string
    blog: string
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
      education: 'Education',
      experience: 'Experience',
      techStack: 'Tech Stack',
      projects: 'Projects',
      blog: 'Blog',
    },
    experience: {
      now: 'Now',
      sintesyTitle: 'Co-Founder @ Sintesy',
      sintesyDescription:
        'Creation of optimized landing pages with Astro and React, increasing conversion rates and improving SEO.\n\nFull development of the web platform with Next.js 15 (App Router), TanStack Query, Nuqs, React, TailwindCSS, Context API, Zod, and React Hook Form, integration with REST APIs via Axios.\n\nScreen design in Figma following usability heuristics and Design System.\n\nImplementation of CI/CD pipelines that optimized build and deploy time on AWS.\n\nLeader of strategic initiatives and positioning, contributing significantly to the expansion of the user base, impacting more than 4,300 leads.\n\nParticipation in startup acceleration programs such as SebraeLAB and CriarCE strengthening product and business evolution.',
      compassTitle: 'Artificial Intelligence with AWS @ Compass UOL',
      compassDescription:
        'End-to-end development of intelligent chatbots, from conception to production delivery, working on both frontend and backend.\n\nUsing Python and Node.js, with libraries like LangChain for creating advanced conversational flows, integration with AWS Bedrock language models and orchestration of dynamic prompts using AWS Lambda and API Gateway, with S3 for storage.\n\nCreation of dedicated web servers on EC2, configuring containerized environments with Docker and Node.js, optimizing images to reduce build and deploy time.\n\nImplementation, monitoring, and real-time observability with CloudWatch Logs, creating metrics and alarms for critical events.\n\nParticipation in agile sprints with Scrum and Kanban, conducting daily meetings, refinements, and incremental deliveries aligned with demands and deadlines.',
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
      education: 'Formação',
      experience: 'Experiência',
      techStack: 'Stack',
      projects: 'Projetos',
      blog: 'Blog',
    },
    experience: {
      now: 'Atual',
      sintesyTitle: 'Co-Fundador @ Sintesy',
      sintesyDescription:
        'Criação de landing pages otimizadas com Astro e React, aumentando a taxa de conversão e melhorando SEO.\n\nDesenvolvimento completo da plataforma web com Next.js 15 (App Router), TanStack Query, Nuqs, React, TailwindCSS, Context API, Zod e React Hook Form, com integração a APIs REST via Axios.\n\nDesign de telas no Figma seguindo heurísticas de usabilidade e Design System.\n\nImplementação de pipelines de CI/CD que otimizaram tempo de build e deploy na AWS.\n\nLiderança de iniciativas estratégicas e posicionamento, contribuindo significativamente para expansão da base de usuários, impactando mais de 4.300 leads.\n\nParticipação em programas de aceleração de startups como SebraeLAB e CriarCE, fortalecendo a evolução do produto e do negócio.',
      compassTitle: 'Inteligência Artificial com AWS @ Compass UOL',
      compassDescription:
        'Desenvolvimento end-to-end de chatbots inteligentes, da concepção à entrega em produção, atuando em frontend e backend.\n\nUso de Python e Node.js, com bibliotecas como LangChain para criar fluxos conversacionais avançados, integração com modelos de linguagem da AWS Bedrock e orquestração de prompts dinâmicos usando AWS Lambda e API Gateway, com S3 para armazenamento.\n\nCriação de servidores dedicados em EC2, configurando ambientes containerizados com Docker e Node.js, otimizando imagens para reduzir tempo de build e deploy.\n\nImplementação, monitoramento e observabilidade em tempo real com CloudWatch Logs, criando métricas e alarmes para eventos críticos.\n\nParticipação em sprints ágeis com Scrum e Kanban, conduzindo dailies, refinements e entregas incrementais alinhadas às demandas e prazos.',
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
