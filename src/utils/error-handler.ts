import { toast } from 'sonner'

import { logout } from '@/stores/auth-store.actions'

import { captureSentryException } from './sentry'
import { ApiErrorKind } from '../services/api/helpers/api-problem.types'

import type { GeneralApiProblem } from '../services/api/helpers/api-problem.types'

const showUnexpectedError = async (error: any) => {
  toast.error('An unexpected error occurred')
  captureSentryException(error)
}

export const handleGenericError = async (error: GeneralApiProblem) => {
  if (!error?.kind) {
    showUnexpectedError(error)
    return
  }

  const showErrorMessage = (err: any) => {
    const message = err?.errors || err?.message

    if (typeof message === 'string') {
      toast.error(message)
      captureSentryException(error)
    } else {
      showUnexpectedError(err)
    }
  }

  switch (error.kind) {
    case ApiErrorKind.UNAUTHORIZED:
      await logout()
      break
    default:
      showErrorMessage(error)
      break
  }
}
