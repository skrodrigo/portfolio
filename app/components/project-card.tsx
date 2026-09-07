import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  IconArrowUpRight,
  IconBrandFigma,
  IconBrandGithub,
  IconDownload,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Project } from '../types/interfaces'
import { useI18n } from './language-provider'

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n()

  return (
    <Card className="flex h-full w-full flex-col overflow-hidden rounded-none border-x-0 border-y border-border bg-transparent shadow-none transition-colors hover:border-foreground/40">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          quality={100}
          priority
          layout="fill"
          objectFit="cover"
          className="rounded-t-none"
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-medium text-lg text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <Badge
              key={tech}
              variant="secondary"
              className={project.colorBadge}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex pt-2 pl-4 gap-2 justify-start">
        {project?.LandingPage && (
          <div className="flex justify-center items-center bg-primary text-primary-foreground px-3 py-1 text-xs rounded-none font-semibold">
            <Link
              href={project?.LandingPage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              {t.project.landingPage}
            </Link>
            <IconArrowUpRight className="ml-1.5 size-3.5" />
          </div>
        )}
        {project?.Dashboard && (
          <div className="flex justify-center items-center bg-primary text-primary-foreground px-3 py-1 text-xs rounded-none font-semibold">
            <Link
              href={project?.Dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {t.project.dashboard}
            </Link>
            <IconArrowUpRight className="ml-1.5 size-3.5" />
          </div>
        )}
        {project?.linkGithub && (
          <div className="flex justify-center items-center bg-primary text-primary-foreground px-3 py-1 text-xs rounded-none font-semibold">
            <IconBrandGithub className="h-4 w-4 mr-2" />
            <Link
              href={project?.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {t.project.github}
            </Link>
            <IconArrowUpRight className="ml-1.5 size-3.5" />
          </div>
        )}
        {project?.linkFigma && (
          <div className="flex justify-center items-center bg-primary text-primary-foreground px-3 py-1 text-xs rounded-none font-semibold">
            <IconBrandFigma className="h-4 w-4 mr-2" />
            <Link
              href={project?.linkFigma}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {t.project.figma}
            </Link>
            <IconArrowUpRight className="ml-1.5 size-3.5" />
          </div>
        )}
        {project?.downloadLink && (
          <div className="flex justify-center items-center bg-primary text-primary-foreground px-3 py-1 text-xs rounded-none font-semibold">
            <IconDownload className="h-4 w-4 mr-2" />
            <Link
              href={project?.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {t.project.download}
            </Link>
            <IconArrowUpRight className="ml-1.5 size-3.5" />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
