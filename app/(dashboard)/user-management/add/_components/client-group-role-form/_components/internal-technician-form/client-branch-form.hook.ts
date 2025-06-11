import { useEffect, useMemo, useRef } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'

import { SelectItem } from '@/components/forms/select/select.types'

import { FormValues } from '../../../add-user-form/add-user-form.types'

export const useInternalTechnicianForm = () => {
  const firstRender = useRef(true)

  const methods = useFormContext<FormValues>()

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: 'internal_technician'
  })

  const handleAdd = () => append({})

  const selectedRole: FormValues['role'] = useWatch({
    control: methods.control,
    name: 'role'
  })

  const techniciansOptions = useMemo((): SelectItem[] => {
    return [
      {
        label: 'John Doe',
        value: 'john-doe'
      }
    ]
  }, [])

  useEffect(() => {
    const isEmptyFields = firstRender.current && fields.length === 0

    if (selectedRole === 'client_group' && isEmptyFields) {
      append({})
      firstRender.current = false
    }
  }, [selectedRole, fields.length])

  return {
    fields,
    techniciansOptions,
    handleAdd
  }
}
