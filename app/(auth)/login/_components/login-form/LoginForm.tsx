'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledInput from '@/components/forms/input/Input'
import ControlledPasswordInput from '@/components/forms/password-input/PasswordInput'
import { FormProvider } from '@/components/ui/form'

import { useLoginForm } from './login-form.hook'

const LoginForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useLoginForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledInput
          name='email'
          label={t('email')}
          placeholder='group@example.com'
          testID='login-email-input'
        />
        <ControlledPasswordInput
          name='password'
          label={t('password')}
          placeholder='********'
          testID='login-password-input'
        />
        <ControlledButton
          type='submit'
          label={t('login')}
          className='mt-4 w-full'
          testID='login-button'
        />
      </FormProvider>
    </div>
  )
}

export default LoginForm
