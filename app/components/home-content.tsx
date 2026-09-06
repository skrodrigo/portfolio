'use client'

import DiagonalLines from '@/components/animata/background/diagonal-lines'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardTitle } from '@/components/ui/card'
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
  IconMail,
  IconWorld,
} from '@tabler/icons-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { getProjects } from '../data/projects'
import { techs } from '../data/tech'
import { useI18n } from './language-provider'
import ProjectCard from './project-card'

export default function HomeContent({
  contributions,
}: {
  contributions: Activity[]
}) {
  const { t, locale } = useI18n()
  const projects = getProjects(locale)
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
          <div className="flex flex-col items-center md:justify-start md:items-start pt-8 space-y-4 w-full">
            <div className="flex flex-col items-center space-y-4 md:border-b pb-3 w-full">
              <Avatar className="w-40 h-40 md:w-60 md:h-60 relative z-10 ">
                <AvatarImage src="/perfil.jpg" alt="Rodrigo Carvalho" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <div className="ml-0 flex justify-center flex-col items-center ">
                <CardTitle className="text-xl">Rodrigo Carvalho</CardTitle>
                <p className="text-sm text-zinc-400">{t.home.role}</p>
              </div>
              <div className="flex justify-center md:justify-start  ml-0 items-center md:items-start gap-2">
                <Link
                  href="https://www.linkedin.com/in/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-none border"
                >
                  <IconBrandLinkedin className="size-5" />
                </Link>
                <Link
                  href="https://github.com/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-none border"
                >
                  <IconBrandGithub className="size-5" />
                </Link>
                <Link
                  href="https://youtube.com/@skrdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-none border"
                >
                  <IconBrandYoutube className="size-5 fill" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto md:border-r">
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">{t.home.summary}</h2>
            <p className="text-sm text-zinc-400 max-w-2xl">{t.summary.text}</p>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">GitHub</h2>
            <div className="overflow-hidden border border-border bg-muted/20 p-2">
              <GitHubContributions
                contributions={contributions}
                githubProfileUrl="https://github.com/skrodrigo"
              />
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              {t.home.certifications}
            </h2>
            <div className="space-y-2">
              <Link
                href={t.certifications.awsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm group text-zinc-300 hover:underline inline-flex items-center"
              >
                {t.certifications.awsTitle}
                <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <br />
              <Link
                href={t.certifications.aiAssistedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm group text-zinc-300 hover:underline inline-flex items-center"
              >
                {t.certifications.aiAssistedTitle}
                <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <br />
              <Link
                href={t.certifications.genAiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm group text-zinc-300 hover:underline inline-flex items-center"
              >
                {t.certifications.genAiTitle}
                <IconArrowUpRight className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">{t.home.education}</h2>
            <div className="space-y-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <h3 className="font-medium text-zinc-100">
                  {t.education.bachelorsTitle}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t.education.bachelorsOrg}
                </p>
              </div>
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <h3 className="font-medium text-zinc-100">
                  {t.education.technicalTitle}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t.education.technicalOrg}
                </p>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">{t.home.experience}</h2>
            <WorkExperience
              className="border-y border-zinc-900 bg-transparent px-0"
              experiences={experiences}
            />
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-foreground">{t.home.techStack}</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-none">
              <div className="flex w-max space-x-2 border-b border-zinc-900 p-4">
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
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">{t.home.projects}</h2>
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
          </motion.section>
          <motion.section
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="group transition-colors flex items-center"
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
