export type SelectAcRequestValue = 'asset-list' | 'details-forms' | 'tech-visit' | ''

export type SelectAcRequestCardType = {
  image: string
  title: string
  description: string
  type: SelectAcRequestValue
}

export type SelectAcRequestCardProps = SelectAcRequestCardType & {
  selectedAcRequest: SelectAcRequestValue
  onSelectAcRequest: (value: SelectAcRequestValue) => void
}

export type SelectAcRequestCardsProps = {
  items: SelectAcRequestCardType[]
}
