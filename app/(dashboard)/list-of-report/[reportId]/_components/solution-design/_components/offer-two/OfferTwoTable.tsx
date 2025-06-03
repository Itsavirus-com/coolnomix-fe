import { useTranslations } from 'next-intl'
import React from 'react'

import Text from '@/components/text/Text'
import { TableCell, TableFooter, TableRow } from '@/components/ui/table'

import { useOfferTwoTable } from './offer-two-table.hook'
import OfferTable from '../offer-table/OfferTable'

const OfferTwoTable = () => {
  const t = useTranslations('report')

  const { data, columns, totalInvestment, totalSavings } = useOfferTwoTable()

  return (
    <OfferTable
      title={t('offer_two')}
      description={
        <Text variant='subtitle2' weight='semibold' className='italic'>
          {t('rent_2_own')}
        </Text>
      }
      data={data}
      columns={columns}
      hasBorder={false}
      hasContainer={true}
      footer={
        <TableFooter className='relative rounded-sm border-none bg-transparent before:absolute before:inset-0 before:h-[98%] before:rounded-sm before:border-1 before:border-[#ECECEC]'>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <div className='flex items-center gap-1.5'>
                <span className='text-[12px] font-semibold'>{t('total_investment')}</span>
                <span className='table-row-end text-[13px] font-bold'>{totalInvestment}</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <div className='flex items-center gap-1.5'>
                <span className='text-[12px] font-semibold'>{t('total_realised_savings')}</span>
                <span className='table-row-end text-[13px] font-bold'>{totalSavings}</span>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      }
    />
  )
}

export default OfferTwoTable
