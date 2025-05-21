export type SelectAcRequestValue = 'asset-list' | 'details-forms' | 'tech-visit'

export type SelectAcRequestCardType = {
  icon: string
  bgColor: string
  borderColor: string
  title: string
  description: string
  type: SelectAcRequestValue
}

export type SelectAcRequestCardProps = SelectAcRequestCardType & {
  selectedAcRequest: SelectAcRequestValue
  onSelectAcRequest: (value: SelectAcRequestValue) => void
}
