import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useSnapshot } from 'valtio'
import { z } from 'zod'

import { registerCreatePasswordPath } from '@/config/paths/auth-path'
import { registerStateStore } from '@/stores/register-state-store'
import { setGroupBranchProfile } from '@/stores/register-state-store.actions'

import { formSchema } from './register-group-branch-form.schema'

export const useRegisterGroupBranchForm = () => {
  const t = useTranslations('validation')

  const router = useRouter()

  const { email, name } = useSnapshot(registerStateStore).state

  const methods = useForm({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      email,
      name
    }
  })

  const onSubmit = useCallback((values: z.infer<ReturnType<typeof formSchema>>) => {
    setGroupBranchProfile(values.email, values.name)
    router.push(registerCreatePasswordPath())
  }, [])

  return {
    methods,
    onSubmit
  }
}
