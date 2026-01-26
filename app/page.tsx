'use client'

import DiagonalLines from '@/components/animata/background/diagonal-lines'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronUpRight,
  IconMail,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useI18n } from './components/language-provider'
import ProjectCard from './components/project-card'
import { getProjects } from './data/projects'
import { techs } from './data/tech'

export default function Component() {
  const { t, locale } = useI18n()
  const projects = getProjects(locale)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-black text-white relative"
    >
      <DiagonalLines className="fixed h-full" />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-screen relative bg-black">
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
                  href="https://www.instagram.com/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-none border"
                >
                  <IconMail className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto md:border-r">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">{t.home.education}</h2>
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">{t.home.experience}</h2>
            <div className="space-y-4 mb-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <span className="text-zinc-400 text-xs">12/2024 - {t.experience.now}</span>
                <h3 className="font-medium text-zinc-100">
                  {t.experience.sintesyTitle}
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  {t.experience.sintesyDescription.split('\n').map((line, idx) => (
                    <span key={line || `line-${idx}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="space-x-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Marketing</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <span className="text-zinc-400 text-xs">12/2024 - 5/2025</span>
                <h3 className="font-medium text-zinc-100">
                  {t.experience.compassTitle}
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  {t.experience.compassDescription.split('\n').map((line, idx) => (
                    <span key={line || `line-${idx}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="space-x-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">{t.home.techStack}</h2>
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">{t.home.projects}</h2>
            <div className="flex flex-col gap-4 justify-start">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            initial={{ y: 20, opacity: 0 }}
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
