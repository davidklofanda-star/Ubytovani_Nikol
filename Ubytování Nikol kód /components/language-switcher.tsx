"use client"

import { Button } from '@/components/ui/button'
import { useI18n } from '@/contexts/i18n-context'

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={language === 'cs' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('cs')}
        className="px-3 py-1 text-xs font-medium"
      >
        CZ
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="px-3 py-1 text-xs font-medium"
      >
        EN
      </Button>
    </div>
  )
}