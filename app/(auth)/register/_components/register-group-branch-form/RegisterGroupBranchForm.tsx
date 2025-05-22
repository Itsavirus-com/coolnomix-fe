'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledInput from '@/components/forms/input/Input'
import { FormProvider } from '@/components/ui/form'

import { useRegisterGroupBranchForm } from './register-group-branch-form.hook'

const RegisterGroupBranchForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useRegisterGroupBranchForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledInput
          required
          name='email'
          label={t('branch_email')}
          type='email'
          testID='register-email'
        />
        <ControlledInput required name='name' label={t('branch_name')} testID='register-name' />
        <ControlledButton
          type='submit'
          label={t('continue')}
          className='mt-4 w-full'
          testID='register-button-continue'
        />
      </FormProvider>
    </div>
  )
}

export default RegisterGroupBranchForm
