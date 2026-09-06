import './globals.css'
import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { LanguageProvider } from './components/language-provider'
import LanguageSwitchFab from './components/language-switch-fab'
import ThemeToggleFab from './components/theme-toggle-fab'

export const metadata: Metadata = {
  title: 'Portfólio | skrodrigo',
  description: 'Portfólio pessoal de Rodrigo Carvalho.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="theme dark" suppressHydrationWarning>
      <body
        className={cn(GeistSans.className, 'antialiased text-foreground bg-background')}
      >
        <LanguageProvider>
          {children}
          <ThemeToggleFab />
          <LanguageSwitchFab />
        </LanguageProvider>
      </body>
    </html>
  )
}
