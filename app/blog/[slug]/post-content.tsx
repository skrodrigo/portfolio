'use client'

import ShinyCard from '@/app/components/shiny-card'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { Card, CardContent } from '@/components/ui/card'
import type { PostData } from '@/lib/posts'
import { code } from '@streamdown/code'
import { IconArrowBackUp, IconCalendar, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import { Streamdown } from 'streamdown'
import { useI18n } from '../../components/language-provider'
import BlogLineNav from './blog-line-nav'

interface PostContentProps {
  post: PostData
}

export default function PostContent({ post }: PostContentProps) {
  const { locale } = useI18n()
  const translation =
    locale === 'pt-BR' ? post.translations?.['pt-BR'] : undefined
  const title = translation?.title ?? post.title
  const contentMarkdown =
    translation?.contentMarkdown ?? post.contentMarkdown ?? ''

  return (
    <div className="min-h-screen bg-background text-foreground p-2">
      <ScrollProgress className="fixed top-0 h-0.5 bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)] z-50" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex bg-zinc-900 items-center text-zinc-400 border rounded-none p-2 justify-center hover:text-zinc-200 mb-8 group"
          >
            <IconArrowBackUp className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <aside
            className="absolute right-[calc(100%+5rem)] top-0 hidden h-full w-80 pr-8 2xl:block"
            aria-label="Neste artigo"
          >
            <div className="sticky top-1/2 -translate-y-1/2">
              <BlogLineNav key={locale} />
            </div>
          </aside>
          <ShinyCard className="w-full min-w-0">
            <Card className="min-w-0 bg-transparent border-none overflow-hidden">
              <CardContent className="p-2">
                <header
                  className="mb-12 text-center"
                  style={{ textAlign: 'center' }}
                >
                  <div
                    className="mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-4 text-sm text-zinc-400"
                    style={{ justifyContent: 'center' }}
                  >
                    <div className="flex items-center px-3 py-1 ">
                      <IconCalendar className="h-4 w-4 mr-1.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(
                          locale === 'pt-BR' ? 'pt-BR' : 'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </time>
                    </div>
                    <div className="flex items-center py-1 ">
                      <IconUser className="h-4 w-4 mr-1.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h1
                    className="mx-auto mb-6 max-w-4xl text-center text-4xl font-bold leading-tight text-zinc-100 md:text-5xl"
                    style={{ textAlign: 'center' }}
                  >
                    {title}
                  </h1>
                </header>

                <article data-blog-content>
                  <Streamdown
                    mode="static"
                    plugins={{ code }}
                    shikiTheme={['github-light', 'github-dark']}
                  >
                    {contentMarkdown}
                  </Streamdown>
                </article>
              </CardContent>
            </Card>
          </ShinyCard>
        </div>
      </div>
    </div>
  )
}
