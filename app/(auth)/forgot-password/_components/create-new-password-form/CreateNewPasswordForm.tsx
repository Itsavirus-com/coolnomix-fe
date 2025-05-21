'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledPasswordInput from '@/components/forms/password-input/PasswordInput'
import { FormProvider } from '@/components/ui/form'

import { useCreateNewPasswordForm } from './create-new-password-form.hook'

const CreateNewPasswordForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useCreateNewPasswordForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledPasswordInput name='password' label={t('password')} />
        <ControlledPasswordInput name='confirmPassword' label={t('confirm_password')} />
        <ControlledButton type='submit' label={t('reset_password')} className='mt-4 w-full' />
      </FormProvider>
    </div>
  )
}

export default CreateNewPasswordForm
