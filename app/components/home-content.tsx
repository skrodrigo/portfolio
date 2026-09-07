'use client'

import DiagonalLines from '@/components/animata/background/diagonal-lines'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardTitle } from '@/components/ui/card'
import { TextAnimate } from '@/components/ui/text-animate'
import type { Activity } from '@/components/contribution-graph'
import { GitHubContributions } from '@/components/github-contributions'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import type { ExperienceItemType } from '@/components/work-experience'
import { WorkExperience } from '@/components/work-experience'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBriefcase,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWorld,
} from '@tabler/icons-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getProjects } from '../data/projects'
import { techs } from '../data/tech'
import { useI18n } from './language-provider'
import ProjectCard from './project-card'

function DiagonalSeparator() {
  return (
    <div
      aria-hidden="true"
      className="h-7 w-full border-y border-border"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, hsl(var(--border)) 0, hsl(var(--border)) 1px, transparent 1px, transparent 7px)',
      }}
    />
  )
}

function SectionTitle({
  children,
  hideTopBorder = false,
}: {
  children: React.ReactNode
  hideTopBorder?: boolean
}) {
  return (
    <h2
      className={`${hideTopBorder ? 'border-b' : 'border-y'} border-border px-3 py-2 text-xl font-semibold text-foreground md:px-4`}
    >
      {children}
    </h2>
  )
}

function AnimatedProfileRole({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(previous => (previous + 1) % items.length)
    }, 2000)

    return () => window.clearInterval(timer)
  }, [items.length])

  return (
    <div className="h-5 overflow-hidden text-sm text-muted-foreground">
      <TextAnimate
        key={items[index]}
        animation="slideUp"
        as="p"
        by="text"
        duration={0.5}
        startOnView={false}
        className="h-5"
      >
        {items[index]}
      </TextAnimate>
    </div>
  )
}

function ProfileDetail({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href?: string
}) {
  const text = href ? (
    <a
      href={href}
      className="truncate transition-colors hover:text-foreground"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  ) : (
    <span className="truncate">{label}</span>
  )

  return (
    <div className="flex min-w-0 items-center gap-3 text-sm text-muted-foreground">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/20 bg-muted text-muted-foreground ring-1 ring-border ring-offset-1 ring-offset-background">
        <Icon className="size-4" />
      </span>
      {text}
    </div>
  )
}

export default function HomeContent({
  contributions,
}: {
  contributions: Activity[]
}) {
  const { t, locale } = useI18n()
  const projects = getProjects(locale)
  const profileRoles = locale === 'pt-BR'
    ? [
      'Designer de UI',
      'Desenvolvedor de Software',
      'Criando com código',
      'Pequenos detalhes importam',
    ]
    : [
      'UI Designer',
      'Software Developer',
      'Creating with code',
      'Small details matter',
    ]
  const toMarkdownList = (description: string) =>
    description
      .split('\n\n')
      .map(item => `- ${item}`)
      .join('\n')
  const experiences: ExperienceItemType[] = [
    {
      id: 'sintesy',
      companyName: 'Sintesy',
      companyLogo: '/sintesy.svg',
      isCurrentEmployer: true,
      positions: [
        {
          id: 'sintesy-front-end',
          title: t.experience.sintesyTitle.replace(/\s[-–]\sSintesy$/, ''),
          employmentPeriod: { start: '12.2024' },
          description: toMarkdownList(t.experience.sintesyDescription),
          skills: ['Next.js', 'React', 'TypeScript', 'Astro', 'AWS', 'AI Agents'],
          isExpanded: true,
        },
      ],
    },
    {
      id: 'compass-uol',
      companyName: 'Compass UOL',
      companyLogo: '/uol.svg',
      positions: [
        {
          id: 'compass-ai-ml',
          title: t.experience.compassTitle.replace(/\s[-–]\sCompass UOL$/, ''),
          employmentPeriod: { start: '12.2024', end: '05.2025' },
          description: toMarkdownList(t.experience.compassDescription),
          skills: ['Python', 'Node.js', 'AWS Bedrock', 'LangChain', 'Docker'],
        },
      ],
    },
  ]

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-background text-foreground relative"
    >
      <DiagonalLines className="fixed h-full" />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-screen relative bg-background">
        <aside className="md:w-1/3 md:h-screen flex justify-center md:sticky top-0 md:border-r md:border-l ">
          <div className="flex w-full flex-col md:items-start md:justify-start">
            <div className="flex w-full flex-col items-center space-y-4 px-4 pb-5 pt-8 md:px-6">
              <Avatar className="w-40 h-40 md:w-60 md:h-60 relative z-10 ">
                <AvatarImage src="/perfil.jpg" alt="Rodrigo Carvalho" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <div className="ml-0 flex justify-center flex-col items-center ">
                <CardTitle className="text-xl">Rodrigo Carvalho</CardTitle>
                <AnimatedProfileRole key={locale} items={profileRoles} />
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Link
                  href="https://www.linkedin.com/in/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-6 items-center justify-center rounded-lg border border-muted-foreground/20 bg-muted text-muted-foreground ring-1 ring-border ring-offset-1 ring-offset-background transition-colors hover:text-foreground"
                >
                  <IconBrandLinkedin className="size-4" />
                </Link>
                <Link
                  href="https://github.com/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-6 items-center justify-center rounded-lg border border-muted-foreground/20 bg-muted text-muted-foreground ring-1 ring-border ring-offset-1 ring-offset-background transition-colors hover:text-foreground"
                >
                  <IconBrandGithub className="size-4" />
                </Link>
                <Link
                  href="https://youtube.com/@skrdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-6 items-center justify-center rounded-lg border border-muted-foreground/20 bg-muted text-muted-foreground ring-1 ring-border ring-offset-1 ring-offset-background transition-colors hover:text-foreground"
                >
                  <IconBrandYoutube className="size-4 fill" />
                </Link>
              </div>
            </div>
            <DiagonalSeparator />
            <div className="grid w-full gap-4 p-4 md:p-6">
              <ProfileDetail icon={IconBriefcase} label={t.home.role} />
              <ProfileDetail icon={IconMapPin} label="Ceará, Brasil" />
              <ProfileDetail
                icon={IconPhone}
                label="+55 88 99274-4891"
                href="tel:+5588992744891"
              />
              <ProfileDetail
                icon={IconWorld}
                label="skrdg.com.br"
                href="https://skrdg.com.br"
              />
              <ProfileDetail icon={IconClock} label="GMT−3 · Fortaleza, CE" />
              <ProfileDetail
                icon={IconMail}
                label="rodrigoa0987@gmail.com"
                href="mailto:rodrigoa0987@gmail.com"
              />
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto md:border-r">
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <SectionTitle>{t.home.summary}</SectionTitle>
            <div className="p-3 md:p-4">
              <p className="text-sm text-muted-foreground max-w-2xl">{t.summary.text}</p>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            <SectionTitle>GitHub</SectionTitle>
            <div className="p-3 md:p-4">
              <div className="overflow-hidden">
                <GitHubContributions
                  contributions={contributions}
                  githubProfileUrl="https://github.com/skrodrigo"
                />
              </div>
            </div>
          </motion.section>
          <DiagonalSeparator />
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            <SectionTitle hideTopBorder>{t.home.certifications}</SectionTitle>
            <div className="p-3 md:p-4">
              <div className="space-y-2">
                <Link
                  href={t.certifications.awsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm group text-muted-foreground hover:text-foreground hover:underline inline-flex items-center"
                >
                  {t.certifications.awsTitle}
                  <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <br />
                <Link
                  href={t.certifications.aiAssistedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm group text-muted-foreground hover:text-foreground hover:underline inline-flex items-center"
                >
                  {t.certifications.aiAssistedTitle}
                  <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <br />
                <Link
                  href={t.certifications.genAiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm group text-muted-foreground hover:text-foreground hover:underline inline-flex items-center"
                >
                  {t.certifications.genAiTitle}
                  <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SectionTitle>{t.home.education}</SectionTitle>
            <div>
              <div>
                <div className="border-b border-border p-3 md:p-4 space-y-1">
                  <h3 className="font-medium text-foreground">
                    {t.education.bachelorsTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.education.bachelorsOrg}
                  </p>
                </div>
                <div className="border-b border-border p-3 md:p-4 space-y-1">
                  <h3 className="font-medium text-foreground">
                    {t.education.technicalTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.education.technicalOrg}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SectionTitle hideTopBorder>{t.home.experience}</SectionTitle>
            <div className="p-3 md:p-4">
              <WorkExperience
                className="border-y border-border bg-transparent px-0"
                experiences={experiences}
              />
            </div>
          </motion.section>
          <DiagonalSeparator />
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SectionTitle hideTopBorder>{t.home.techStack}</SectionTitle>
            <div className="p-3 md:p-4">
              <ScrollArea className="w-full whitespace-nowrap rounded-none">
                <div className="flex w-max space-x-2 border-b border-border">
                  {techs.map(tech => (
                    <img
                      src={tech.image}
                      alt={tech.title}
                      key={tech.title}
                      className="h-12 w-12 duration-500"
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SectionTitle>{t.home.projects}</SectionTitle>
            <div className="p-3 md:p-4">
              <div className="flex flex-col gap-4 justify-start">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={false}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="group flex items-center border-y border-border px-3 py-2 transition-colors md:px-4"
            >
              <h2 className="text-xl font-semibold hover:opacity-90">{t.home.blog}</h2>
              <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.section>
        </main>
      </div>
    </motion.div>
  )
}
