'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledPasswordInput from '@/components/forms/password-input/PasswordInput'
import { FormProvider } from '@/components/ui/form'

import { useRegisterCreatePasswordForm } from './register-create-password-form.hook'

const RegisterCreatePasswordForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useRegisterCreatePasswordForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledPasswordInput name='password' label={t('password')} testID='register-password' />
        <ControlledPasswordInput
          name='confirm_password'
          label={t('confirm_password')}
          testID='register-confirm-password'
        />
        <ControlledButton
          type='submit'
          label={t('register')}
          className='mt-4 w-full'
          testID='register-button-submit'
        />
      </FormProvider>
    </div>
  )
}

export default RegisterCreatePasswordForm
