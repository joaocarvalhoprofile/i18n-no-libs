import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { LanguageProps, LanguageTypes } from '../../../locales/lang'

import { pt } from '../../../locales/pt'
import { fr } from '../../../locales/fr'
import { us } from '../../../locales/us'

interface SessionContextProviderProps {
  children: ReactNode
}

interface SessionContextProps {
  i18n: LanguageProps,
  handleSelectLanguageType: (languageType: LanguageType) => void
}

const SessionContext = createContext<SessionContextProps>({} as SessionContextProps)

export type LanguageType = keyof typeof LanguageTypes

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const [languageSelected, setLanguageSelected] = useState<LanguageProps>()

  useEffect(() => {
    setLanguageSelected(pt)
  }, [])

  function handleSelectLanguageType(languageType: LanguageType) {
    let lang = languageType === 'pt' ? pt
      : languageType === 'us' ? us
        : fr
    setLanguageSelected(lang)
  }

  return (
    <SessionContext.Provider value={{ i18n: languageSelected, handleSelectLanguageType }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('SessionContext not defined')
  }
  return context
}