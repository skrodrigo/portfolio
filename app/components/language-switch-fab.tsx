'use client'

import { IconLanguage } from '@tabler/icons-react'
import ReactCountryFlag from 'react-country-flag'
import { useI18n } from './language-provider'

export default function LanguageSwitchFab() {
  const { locale, toggleLocale } = useI18n()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês'}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-zinc-900/90 text-white border border-zinc-700 px-3 py-2 rounded-none shadow-md backdrop-blur hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      <ReactCountryFlag
        countryCode={locale === 'en' ? 'US' : 'BR'}
        svg
        style={{ width: '1em', height: '1em' }}
        aria-label={locale === 'en' ? 'United States' : 'Brazil'}
      />
      <span className="text-xs font-medium">{locale === 'en' ? 'EN' : 'PT-BR'}</span>
    </button>
  )
}
