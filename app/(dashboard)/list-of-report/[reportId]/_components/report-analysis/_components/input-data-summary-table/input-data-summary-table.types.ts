export type UnitSummaryType = {
  id: string
  external_units: number
  internal_units: number
  total_kw: number
}

export type KwhSummaryType = {
  id: string
  kwh_tarif: number
  kwh_tarif_glwb: number
  avg_operating_hours: number
}
