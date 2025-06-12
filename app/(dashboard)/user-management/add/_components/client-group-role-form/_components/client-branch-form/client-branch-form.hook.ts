import { useEffect, useRef } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'

import { FormValues } from '../../../add-user-form/add-user-form.types'

export const useClientBranchForm = () => {
  const firstRender = useRef(true)

  const methods = useFormContext<FormValues>()

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: 'client_branch'
  })

  const handleAdd = () => append({})

  const selectedRole: FormValues['role'] = useWatch({
    control: methods.control,
    name: 'role'
  })

  useEffect(() => {
    const isEmptyFields = firstRender.current && fields.length === 0

    if (selectedRole === 'client_group' && isEmptyFields) {
      append({})
      firstRender.current = false
    }
  }, [selectedRole, fields.length])

  return {
    fields,
    handleAdd
  }
}
