import { ColumnDef } from '@tanstack/react-table'
import { startCase, toLower } from 'lodash'
import { TFunction } from 'next-intl'

import Icon from '@/components/icon/Icon'
import { TableRowActions } from '@/components/table/table-actions'
import Text from '@/components/text/Text'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { UserManagementTableType } from './user-management-table.types'

const getAccountStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <Icon icon='icon-check-radio' className='text-[#2FCA6D]' size={16} />
    case 'inactive':
      return <Icon icon='icon-remove' className='text-[#E84D3A]' size={16} />
    default:
      return <Icon icon='icon-time' className='text-[#607A9B]' size={16} />
  }
}

export const getColumns = (t: TFunction): ColumnDef<UserManagementTableType>[] => {
  return [
    {
      accessorKey: 'email_address',
      header: () => t('email_address')
    },
    {
      accessorKey: 'name',
      size: 228,
      header: () => t('name')
    },
    {
      accessorKey: 'account_status',
      size: 228,
      header: () => (
        <div className='flex items-center gap-1.5'>
          <span>{t('account_status')}</span>
          <Tooltip>
            <TooltipTrigger className='flex items-center'>
              <Icon icon='icon-info-circle' size={16} className='text-grey-darkest' />
            </TooltipTrigger>
            <TooltipContent>
              <div className='w-[275px]'>
                <Text tag='span' className='mb-2' weight='semibold'>
                  {t('account_status')}
                </Text>
                <Text tag='span' variant='body1' className='leading-[130%]'>
                  {t('indicates_whether_an_account_is_active')}
                </Text>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      ),
      cell: ({ row }) => {
        return (
          <div className='flex items-center gap-1'>
            {getAccountStatusIcon(row.original.account_status)}
            <Text tag='span' variant='body1'>
              {startCase(row.original.account_status)}
            </Text>
          </div>
        )
      }
    },
    {
      accessorKey: 'role',
      size: 228,
      header: () => t('role'),
      cell: ({ row }) => {
        return (
          <Text tag='span' variant='body1'>
            {startCase(toLower(row.original.role))}
          </Text>
        )
      }
    },
    {
      accessorKey: 'action',
      size: 170,
      header: () => t('action'),
      cell: ({ row }) => {
        return <TableRowActions actions={row.original.action} />
      },
      enableSorting: false
    }
  ]
}
