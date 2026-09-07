'use client'

import { Card, CardContent } from '@/components/ui/card'
import { IconArrowBackUp } from '@tabler/icons-react'
import Link from 'next/link'
import { useI18n } from '../components/language-provider'
import ShinyCard from '../components/shiny-card'

type Post = {
  slug: string
  date: string
  title: string
  summary: string
  translations?: {
    'pt-BR'?: {
      title: string
      summary: string
    }
  }
}

export default function BlogIndexClient({ posts }: { posts: Post[] }) {
  const { t, locale } = useI18n()

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-2">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex bg-zinc-900 items-center text-zinc-400 border rounded-none p-2 justify-center hover:text-zinc-200 mb-8 group"
          >
            <IconArrowBackUp className="h-4 w-4" />
          </Link>

          <h1
            className="mx-auto mb-10 text-center text-4xl font-bold text-zinc-100"
            style={{ textAlign: 'center' }}
          >
            {t.home.blog}
          </h1>

          {posts.length === 0 && (
            <p className="text-center text-zinc-400">{t.blog.empty}</p>
          )}

          <div className="flex flex-wrap justify-center gap-6">
            {posts.map(post => {
              const translation =
                locale === 'pt-BR' ? post.translations?.['pt-BR'] : undefined

              return (
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                  key={post.slug}
                >
                  <ShinyCard className="group h-full">
                    <Card className="bg-zinc-950 border border-zinc-700 group-hover:border-zinc-500 overflow-hidden h-full flex flex-col">
                      <CardContent className="p-6 flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <time
                            dateTime={post.date}
                            className="text-sm text-zinc-500 mb-2 block"
                          >
                            {new Date(post.date).toLocaleDateString(
                              locale === 'pt-BR' ? 'pt-BR' : 'en-US',
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              }
                            )}
                          </time>
                          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
                            {translation?.title ?? post.title}
                          </h2>
                          <p className="text-sm text-zinc-400 line-clamp-3">
                            {translation?.summary ?? post.summary}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </ShinyCard>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
