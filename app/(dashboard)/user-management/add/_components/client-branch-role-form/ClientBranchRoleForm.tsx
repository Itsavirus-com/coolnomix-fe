import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ControlledSelect from '@/components/forms/select/Select'

import { useClientBranchRoleForm } from './client-branch-role-form.hook'
import { AddUserFormProps } from '../add-user-form/add-user-form.types'

const ClientBranchRoleForm: FC<AddUserFormProps> = (props) => {
  const t = useTranslations('user_management')

  const { branchOptions } = useClientBranchRoleForm()

  const { isShow } = props

  if (!isShow) return null

  return (
    <ControlledSelect
      required
      name='branch_group_name'
      label={t('group_name')}
      items={branchOptions}
      placeholder={t('choose_branch_group')}
    />
  )
}

export default ClientBranchRoleForm
