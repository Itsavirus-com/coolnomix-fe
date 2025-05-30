import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { registerCreateProfilePath } from '@/config/paths/auth-path'

import { formSchema } from './register-group-name-form.schema'

export const useRegisterGroupNameForm = () => {
  const t = useTranslations('validation')

  const router = useRouter()

  const methods = useForm({
    resolver: zodResolver(formSchema(t))
  })

  const onSubmit = useCallback((values: z.infer<ReturnType<typeof formSchema>>) => {
    console.log(values)
    router.push(registerCreateProfilePath())
  }, [])

  return {
    methods,
    onSubmit
  }
}
