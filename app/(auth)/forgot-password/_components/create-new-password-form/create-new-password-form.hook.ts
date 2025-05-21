import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { forgotPasswordSuccessPath } from '@/config/paths/auth-path'

import { formSchema } from './create-new-password-form.schema'

export const useCreateNewPasswordForm = () => {
  const t = useTranslations('validation')

  const router = useRouter()

  const methods = useForm({
    resolver: zodResolver(formSchema(t))
  })

  const onSubmit = useCallback((values: z.infer<ReturnType<typeof formSchema>>) => {
    console.log(values)
    router.push(forgotPasswordSuccessPath())
  }, [])

  return {
    methods,
    onSubmit
  }
}
