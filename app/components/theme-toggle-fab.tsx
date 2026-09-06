'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void
}

export default function ThemeToggleFab() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const nextIsDark = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches

    document.documentElement.classList.toggle('dark', nextIsDark)
    document.documentElement.style.colorScheme = nextIsDark ? 'dark' : 'light'
    setIsDark(nextIsDark)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains('dark')
    const applyTheme = () => {
      document.documentElement.classList.toggle('dark', nextIsDark)
      document.documentElement.style.colorScheme = nextIsDark ? 'dark' : 'light'
      localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
      setIsDark(nextIsDark)
    }
    const viewTransitionDocument = document as ViewTransitionDocument

    if (viewTransitionDocument.startViewTransition) {
      viewTransitionDocument.startViewTransition(applyTheme)
    } else {
      applyTheme()
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="fixed bottom-16 right-4 z-50 flex size-10 items-center justify-center border border-border bg-background/90 text-foreground shadow-md backdrop-blur transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-foreground/30"
    >
      {isDark ? <IconSun className="size-5" /> : <IconMoon className="size-5" />}
    </button>
  )
}
