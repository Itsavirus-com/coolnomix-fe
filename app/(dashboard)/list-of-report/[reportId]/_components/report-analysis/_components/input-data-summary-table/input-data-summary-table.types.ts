import { ReportSummaryInputDatum } from '@/services/swr/models/report.types'

export type InputDataSummaryTableType = Omit<ReportSummaryInputDatum, 'created_at' | 'updated_at'>
