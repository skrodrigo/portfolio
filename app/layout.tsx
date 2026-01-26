import './globals.css'
import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { LanguageProvider } from './components/language-provider'
import LanguageSwitchFab from './components/language-switch-fab'

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
    <html lang="en" className="dark">
      <body
        className={cn(GeistSans.className, 'antialiased text-white bg-black')}
      >
        <LanguageProvider>
          {children}
          <LanguageSwitchFab />
        </LanguageProvider>
      </body>
    </html>
  )
}
