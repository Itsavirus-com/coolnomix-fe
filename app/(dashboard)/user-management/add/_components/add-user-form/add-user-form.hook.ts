import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback, useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { SelectItem } from '@/components/forms/select/select.types'
import { ROLE_OPTIONS } from '@/config/constant'
import { userManagementSuccessPath } from '@/config/paths'
import { ButtonGroupType } from '@/types/general'

import { formSchema } from './add-user-form.schema'
import { FormValues } from './add-user-form.types'

export const useAddUserForm = () => {
  const t = useTranslations('common')
  const tVal = useTranslations('validation')

  const router = useRouter()

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema(tVal))
  })

  const handleBack = () => router.back()
  const onSubmit = useCallback((values: FormValues) => {
    console.log(values)
    router.push(userManagementSuccessPath())
  }, [])

  const rolesOptions = useMemo(
    (): SelectItem[] =>
      Object.entries(ROLE_OPTIONS).map(([value, label]) => ({
        value,
        label: t(label)
      })),
    []
  )

  const selectedRole: FormValues['role'] = useWatch({
    control: methods.control,
    name: 'role'
  })

  const buttons = useMemo((): ButtonGroupType => {
    return [
      {
        size: 'lg',
        variant: 'cancel',
        label: t('cancel'),
        onClick: handleBack
      },
      {
        type: 'submit',
        size: 'lg',
        label: t('add_account')
      }
    ]
  }, [])

  return {
    methods,
    onSubmit,
    buttons,
    rolesOptions,
    selectedRole
  }
}
