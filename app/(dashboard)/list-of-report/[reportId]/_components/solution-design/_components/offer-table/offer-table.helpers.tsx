import { TFunction } from 'next-intl'

import { ExtendedColumnDef } from '@/components/table/table.types'

import { OfferTableType } from './offer-table.types'

export const getColumns = (t: TFunction): ExtendedColumnDef<OfferTableType>[] => {
  return [
    {
      accessorKey: 'category',
      header: () => t('category'),
      cellClassName: 'font-semibold'
    },
    {
      accessorKey: 'description',
      header: () => t('description')
    }
  ]
}
