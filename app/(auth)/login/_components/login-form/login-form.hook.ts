import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { formSchema } from './login-form.schema'

export const useLoginForm = () => {
  const t = useTranslations('auth')

  const methods = useForm({
    resolver: zodResolver(formSchema(t))
  })

  const onSubmit = useCallback((values: z.infer<ReturnType<typeof formSchema>>) => {
    console.log(values)
  }, [])

  return {
    methods,
    onSubmit
  }
}
