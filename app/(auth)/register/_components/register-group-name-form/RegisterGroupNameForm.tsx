'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledInput from '@/components/forms/input/Input'
import { FormProvider } from '@/components/ui/form'

import { useRegisterGroupNameForm } from './register-group-name-form.hook'

const RegisterGroupNameForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useRegisterGroupNameForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledInput disabled name='groupName' label={t('group_name')} />
        <ControlledButton type='submit' label={t('continue')} className='mt-4 w-full' />
      </FormProvider>
    </div>
  )
}

export default RegisterGroupNameForm
