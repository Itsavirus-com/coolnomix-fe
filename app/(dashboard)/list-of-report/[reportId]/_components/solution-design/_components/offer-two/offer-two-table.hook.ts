import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { toCurrencyString } from '@/utils/to-currency-string'

import { getColumns } from './offer-two-table.helpers'
import { OfferTableType } from '../offer-table/offer-table.types'

export const useOfferOneTable = () => {
  const t = useTranslations('report')

  const data: OfferTableType[] = [
    {
      category: 'Term',
      description: '60 months'
    },
    {
      category: 'Payments',
      description: 'Monthly'
    },
    {
      category: 'Structure',
      description: '90% > 20%'
    },
    {
      category: 'Capex',
      description: 'Free'
    },
    {
      category: 'Guarantee',
      description: '5 years'
    },
    {
      category: 'Servicing',
      description: '20% discount'
    },
    {
      category: 'ROI',
      description: '0%'
    }
  ]
  const columns = useMemo(() => getColumns(t), [])

  const totalInvestment = toCurrencyString(142205760)
  const totalRealisedSavings = toCurrencyString(244931640)

  return {
    data,
    columns,
    totalInvestment,
    totalRealisedSavings
  }
}
