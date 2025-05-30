import { truncate } from 'lodash'
import { useTranslations } from 'next-intl'
import React from 'react'

import Text from '@/components/text/Text'
import { TableCell, TableFooter, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { useSavingShareTable } from './saving-share-table.hook'
import { TableType } from './saving-share-table.types'
import ReportTable from '../../../report-table/ReportTable'

const SavingShareTable = () => {
  const t = useTranslations('report')

  const { data, columns, totalRealisedSavings } = useSavingShareTable()

  return (
    <ReportTable<TableType, unknown>
      title={t('saving_share')}
      columns={columns}
      data={data}
      hasBorder
      hasContainer={false}
      classNames={{
        title: 'text-end italic'
      }}
      footer={
        <TableFooter className='border-none bg-transparent'>
          <TableRow className='border-[#ECECEC]'>
            <TableCell colSpan={columns.length} className='h-[35px]' />
          </TableRow>
          <TableRow className='border-[#ECECEC]'>
            <TableCell colSpan={columns.length}>
              <div className='flex items-center gap-1.5'>
                <span className='text-[12px] font-semibold'>{t('total_realised_savings')}</span>
                {totalRealisedSavings.length > 14 ? (
                  <Tooltip>
                    <TooltipTrigger>
                      <span className='text-blue-dark text-[13px] font-bold'>
                        {truncate(totalRealisedSavings, { length: 13 })}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Text tag='span'>{totalRealisedSavings}</Text>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <span className='table-row-end text-blue-dark font-semibold'>
                    {totalRealisedSavings}
                  </span>
                )}
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      }
    />
  )
}

export default SavingShareTable
