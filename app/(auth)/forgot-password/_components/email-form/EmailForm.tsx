'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledInput from '@/components/forms/input/Input'
import { FormProvider } from '@/components/ui/form'

import { useEmailForm } from './email-form.hook'

const EmailForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useEmailForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledInput
          name='email'
          label={t('email')}
          placeholder='group@example.com'
          testID='forgot-password-email-input'
        />
        <ControlledButton
          type='submit'
          label={t('continue')}
          className='mt-4 w-full'
          testID='forgot-password-button'
        />
      </FormProvider>
    </div>
  )
}

export default EmailForm
