'use client'

import ShinyCard from '@/app/components/shiny-card'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { Card, CardContent } from '@/components/ui/card'
import type { PostData } from '@/lib/posts'
import { IconArrowBackUp, IconCalendar, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import { useI18n } from '../../components/language-provider'
import BlogLineNav from './blog-line-nav'

interface PostContentProps {
  post: PostData
}

export default function PostContent({ post }: PostContentProps) {
  const { locale } = useI18n()

  return (
    <div className="min-h-screen bg-background text-foreground p-2">
      <ScrollProgress className="fixed top-0 h-0.5 bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)] z-50" />
      <div className="mx-auto max-w-7xl">
        <Link
          href="/blog"
          className="inline-flex bg-zinc-900 items-center text-zinc-400 border rounded-none p-2 justify-center hover:text-zinc-200 mb-8 group"
        >
          <IconArrowBackUp className="h-4 w-4" />
        </Link>

        <div className="flex items-start gap-8">
          <aside className="sticky top-20 hidden w-48 shrink-0 lg:block" aria-label="Neste artigo">
            <BlogLineNav />
          </aside>
          <ShinyCard>
          <Card className="min-w-0 bg-transparent border-none overflow-hidden">
            <CardContent className="p-2">
              <header className="mb-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
                  <div className="flex items-center px-3 py-1 ">
                    <IconCalendar className="h-4 w-4 mr-1.5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(locale === 'pt-BR' ? 'pt-BR' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center py-1 ">
                    <IconUser className="h-4 w-4 mr-1.5" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
                  {post.title}
                </h1>
              </header>

              <article className="prose prose-invert max-w-none" data-blog-content>
                <div
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                  dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                />
              </article>
            </CardContent>
          </Card>
          </ShinyCard>
        </div>
      </div>
    </div>
  )
}
