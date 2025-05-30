import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { registerCreatePasswordPath } from '@/config/paths/auth-path'

import { formSchema } from './register-create-profile-form.schema'

export const useRegisterCreateProfileForm = () => {
  const t = useTranslations('validation')

  const router = useRouter()

  const methods = useForm({
    resolver: zodResolver(formSchema(t))
  })

  const onSubmit = useCallback((values: z.infer<ReturnType<typeof formSchema>>) => {
    console.log(values)
    router.push(registerCreatePasswordPath())
  }, [])

  return {
    methods,
    onSubmit
  }
}
