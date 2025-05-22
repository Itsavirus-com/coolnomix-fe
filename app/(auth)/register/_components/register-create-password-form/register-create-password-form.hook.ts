import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { snapshot } from 'valtio'
import { z } from 'zod'

import { authApi } from '@/services/api/auth-api'
import { registerStateStore } from '@/stores/register-state-store'
import { resetRegisterState, setGroupBranchPassword } from '@/stores/register-state-store.actions'
import { handleGenericError } from '@/utils/error-handler'

import { formSchema } from './register-create-password-form.schema'

export const useRegisterCreatePasswordForm = () => {
  const t = useTranslations('auth')
  const tVal = useTranslations('validation')
  const router = useRouter()

  const methods = useForm({
    resolver: zodResolver(formSchema(tVal))
  })

  const handleRegister = async () => {
    const registerState = snapshot(registerStateStore).state

    try {
      await authApi.register(registerState)
      resetRegisterState()
      toast.success(t('register_success'))
      router.push('/')
    } catch (error: any) {
      handleGenericError(error)
    }
  }

  const onSubmit = useCallback(async (values: z.infer<ReturnType<typeof formSchema>>) => {
    setGroupBranchPassword(values.password, values.confirm_password)
    await handleRegister()
  }, [])

  return {
    methods,
    onSubmit
  }
}
