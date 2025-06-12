'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'
import { FormProvider } from '@/components/ui/form'

import { useAddUserForm } from './add-user-form.hook'
import ClientBranchRoleForm from '../client-branch-role-form/ClientBranchRoleForm'
import ClientGroupRoleForm from '../client-group-role-form/ClientGroupRoleForm'

const AddUserForm = () => {
  const t = useTranslations('user_management')

  const { methods, onSubmit, buttons, rolesOptions, selectedRole } = useAddUserForm()

  return (
    <div className='mt-8'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledInput
          required
          name='email'
          label={t('email_address')}
          placeholder='group@example.com'
        />
        <ControlledInput required name='name' label={t('name')} placeholder='Jonathan Alexander' />
        <ControlledSelect
          required
          name='role'
          label={t('role')}
          placeholder={t('select_role')}
          items={rolesOptions}
        />
        <ClientGroupRoleForm isShow={selectedRole === 'client_group'} />
        <ClientBranchRoleForm isShow={selectedRole === 'client_branch'} />
        <ButtonGroup buttons={buttons} className='mt-12 justify-end' />
      </FormProvider>
    </div>
  )
}

export default AddUserForm
