'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Button from '@/components/button/Button'
import UncontrolledSelect from '@/components/forms/select/UncontrolledSelect'
import Icon from '@/components/icon/Icon'
import SearchInput from '@/components/search-input/SearchInput'

import { useUserManagementHeader } from './user-management-header.hook'

const UserManagementHeader = () => {
  const t = useTranslations('user_management')

  const { rolesOptions } = useUserManagementHeader()

  return (
    <div className='mb-6 flex items-center justify-between'>
      <div className='flex items-center gap-1.5'>
        <SearchInput className='w-[263px]' size='md' />
        <UncontrolledSelect
          className='h-8'
          items={rolesOptions}
          value=''
          onValueChange={() => {}}
          placeholder={t('choose_role')}
        />
      </div>
      <Button startContent={<Icon icon='icon-circle-plus' size={16} />} label={t('add_account')} />
    </div>
  )
}

export default UserManagementHeader
