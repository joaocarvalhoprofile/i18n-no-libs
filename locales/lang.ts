export interface LanguageProps {
  profile: {
    my_name_is: string
    function: string
    description: string
    country: string
    status: string
  }
}

export const LanguageTypes = {
  pt: {
    id: 'pt', name: 'Português'
  },
  us: {
    id: 'us', name: 'English'
  },
  fr: {
    id: 'fr', name: 'Français',
  }
}