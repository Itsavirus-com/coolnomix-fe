import { ReportOfferFee } from '@/services/swr/models/report.types'

export type TableType = Pick<ReportOfferFee, 'label' | 'fee' | 'actual_savings'>
