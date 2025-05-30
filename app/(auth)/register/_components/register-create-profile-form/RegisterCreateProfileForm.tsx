'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ControlledButton from '@/components/button/ButtonControlled'
import ControlledInput from '@/components/forms/input/Input'
import ControlledPhoneInput from '@/components/forms/phone-input/PhoneInput'
import { FormProvider } from '@/components/ui/form'

import { useRegisterCreateProfileForm } from './register-create-profile-form.hook'

const RegisterCreateProfileForm = () => {
  const t = useTranslations('auth')

  const { methods, onSubmit } = useRegisterCreateProfileForm()

  return (
    <div className='mt-6 mb-4'>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <ControlledInput required name='legalCompanyName' label={t('legal_company_name')} />
        <ControlledPhoneInput
          required
          name='phoneNumber'
          phoneNumberName='phoneNumberCountry'
          label={t('contact_number')}
        />
        <ControlledInput required name='picName' label={t('pic_name')} />
        <ControlledInput required name='picEmail' label={t('pic_email')} type='email' />
        <ControlledInput required name='picNpwp' label={t('pic_npwp')} type='number' />
        <ControlledButton type='submit' label={t('continue')} className='mt-4 w-full' />
      </FormProvider>
    </div>
  )
}

export default RegisterCreateProfileForm
