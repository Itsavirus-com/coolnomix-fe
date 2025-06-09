'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Button from '@/components/button/Button'
import Icon from '@/components/icon/Icon'
import SearchInput from '@/components/search-input/SearchInput'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { useUserManagementHeader } from './user-management-header.hook'

const UserManagementHeader = () => {
  const t = useTranslations('user_management')

  const { rolesOptions } = useUserManagementHeader()

  return (
    <div className='mb-6 flex items-center justify-between'>
      <div className='flex items-center gap-1.5'>
        <SearchInput className='w-[263px]' size='md' />
        <Select value='' onValueChange={() => {}}>
          <SelectTrigger className='h-8 w-[150px]'>
            <SelectValue placeholder={t('choose_role')} />
          </SelectTrigger>
          <SelectContent>
            {rolesOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button startContent={<Icon icon='icon-circle-plus' size={16} />} label={t('add_account')} />
    </div>
  )
}

export default UserManagementHeader
