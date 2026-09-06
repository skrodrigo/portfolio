'use client'

import { LineNav, type LineNavItem } from '@/components/line-nav'
import { useEffect, useState } from 'react'

export default function BlogLineNav() {
  const [items, setItems] = useState<LineNavItem[]>([])
  const [activeHref, setActiveHref] = useState<string>()

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>('[data-blog-content] h2, [data-blog-content] h3')
    )

    const usedIds = new Set<string>()
    for (const heading of headings) {
      const baseId =
        heading.id ||
        (heading.textContent || 'secao')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      let id = baseId || 'secao'
      let suffix = 2
      while (usedIds.has(id)) id = `${baseId}-${suffix++}`
      heading.id = id
      usedIds.add(id)
    }

    const navItems = headings.map(heading => ({
      title: heading.textContent?.trim() || heading.id,
      href: `#${heading.id}`,
    }))

    setItems(navItems)
    setActiveHref(navItems[0]?.href)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visible) setActiveHref(`#${visible.target.id}`)
      },
      { rootMargin: '-15% 0px -70% 0px' }
    )

    for (const heading of headings) observer.observe(heading)
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  return (
    <LineNav
      className="max-h-[calc(100vh-8rem)] overflow-y-auto"
      items={items}
      activeHref={activeHref}
      scrollActiveIntoView={false}
      onItemClick={(_, event) => {
        event.preventDefault()
        const target = document.querySelector<HTMLElement>(event.currentTarget.hash)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', event.currentTarget.hash)
      }}
    />
  )
}
