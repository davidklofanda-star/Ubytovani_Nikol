"use client"

import { ConvexClientProvider } from '@/components/convex-client-provider'
import { I18nProvider } from '@/contexts/i18n-context'

interface ClientProvidersProps {
  children: React.ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ConvexClientProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ConvexClientProvider>
  )
}