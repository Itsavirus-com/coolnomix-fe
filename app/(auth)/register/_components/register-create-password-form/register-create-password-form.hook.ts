import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { formSchema } from './register-create-password-form.schema'

export const useRegisterCreatePasswordForm = () => {
  const router = useRouter()
  const t = useTranslations('validation')

  const methods = useForm({
    resolver: zodResolver(formSchema(t))
  })

  const onSubmit = useCallback((values: z.infer<ReturnType<typeof formSchema>>) => {
    console.log(values)
    router.push('/')
  }, [])

  return {
    methods,
    onSubmit
  }
}
