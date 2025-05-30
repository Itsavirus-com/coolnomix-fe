export type SelectLanguageValue = 'idn' | 'en'

export type SelectLanguageCardType = {
  image: string
  title: string
  description: string
  value: SelectLanguageValue
}

export type SelectLanguageCardProps = SelectLanguageCardType & {
  selectedLanguage: SelectLanguageValue
  onSelectLanguage: (value: SelectLanguageValue) => void
}
