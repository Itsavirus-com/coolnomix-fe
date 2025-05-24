import type { Collection } from '../middleware/collection-adaptor.types'

type BaseEntity = {
  id: string
  created_at: string
  updated_at: string
}

type User = BaseEntity & {
  email: string
  role: number
  confirmed_at: string
}

type ClientBranch = BaseEntity & {
  user_id: string
  user: User
  name: string
}

type ReportHealth = BaseEntity & {
  health_score: number
  health_notes: string
}

type ReportSummaryInputDatum = BaseEntity & {
  external_units: number
  internal_units: number
  total_kw: number
  tariff_lwb: number
  tariff_glwb: number
  average_operating_hours: number
}

type ReportEstimatedUsageData = BaseEntity & {
  period: 'monthly' | 'yearly'
  energy_usage_kw: number
  running_cost_idr: number
}

type ReportEstimatedUsage = BaseEntity & {
  type: 'current' | 'potential'
  report_estimated_usage_data: ReportEstimatedUsageData[]
}

type GroupedBarChartData = BaseEntity & {
  unit_type: string
  unit_id: string
  label: string
  yearly_current_usage_kw: number
  yearly_saving_potentials_kw: number
}

type GroupedBarChart = BaseEntity & {
  data: GroupedBarChartData[]
}

type ReportAnalysis = BaseEntity & {
  report_summary_input_datum: ReportSummaryInputDatum
  report_estimated_usages: ReportEstimatedUsage[]
  grouped_bar_chart: GroupedBarChart
}

type ReportHardwareRequirement = BaseEntity & {
  total_coolnomix_unit: number
  total_energy_monitors: number
}

type ReportTotalSavingPotential = BaseEntity & {
  kw: number
  idr: number
}

type ReportOfferFee = BaseEntity & {
  label: string
  fee: number
  actual_savings: number
}

type LineChartData = BaseEntity & {
  name: string
  values: number[]
}

type LineChart = BaseEntity & {
  labels: string[]
  data: LineChartData[]
}

type ReportOffer = BaseEntity & {
  type: 'saving_share' | 'rent_own'
  term: number
  payments: 'monthly' | 'yearly'
  structure: string
  capex: string
  guarantee: number
  servicing: string
  roi: number
  total_investments: number
  total_savings: number
  report_offer_fees: ReportOfferFee[]
  line_chart_id: string
  line_chart: LineChart
}

type ReportSolutionDesign = BaseEntity & {
  report_hardware_requirement: ReportHardwareRequirement
  report_total_saving_potential: ReportTotalSavingPotential
  report_offers: ReportOffer[]
}

export type ReportModel = BaseEntity & {
  client_branch: ClientBranch
  type: string
  report_health: ReportHealth
  report_analysis: ReportAnalysis
  report_solution_design: ReportSolutionDesign
}

export type ReportCollection = Collection<'reports', ReportModel>
