import camelCase from 'lodash/camelCase'

import type { UseFormReturn } from 'react-hook-form'

type ParseApiErrorParams = {
  error: {
    message: string
    errors: {
      field: string
      message: string
    }[]
  }
  methods: UseFormReturn<any, any>
}

export const parseApiErrors = (params: ParseApiErrorParams) => {
  const { error, methods } = params

  if (!Array.isArray(error.errors)) {
    return
  }

  if (!error?.errors?.length) {
    return
  }

  error.errors.forEach(({ field, message }) => {
    const errorKey = camelCase(field.replace(/\d/g, ''))

    methods.setError(errorKey, { message, type: 'custom' }, { shouldFocus: false })
  })
}
