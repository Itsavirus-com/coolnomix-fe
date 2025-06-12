import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { requiredEmailSchema, requiredStringSchema } from '@/utils/schema'

type RequiredField = 'branch_group_name' | 'client_branch' | 'internal_technician'

const ROLE_REQUIREMENTS: Record<string, RequiredField[]> = {
  admin: [],
  client_group: ['client_branch', 'internal_technician'],
  client_branch: ['branch_group_name'],
  internal_technician: []
}

export const formSchema = (t: TFunction) =>
  z
    .object({
      email: requiredEmailSchema(t),
      name: requiredStringSchema(t),
      role: requiredStringSchema(t),
      branch_group_name: z.string().optional(),
      client_branch: z
        .array(
          z.object({
            email: requiredEmailSchema(t),
            name: requiredStringSchema(t)
          })
        )
        .optional(),
      internal_technician: z
        .array(
          z.object({
            name: requiredStringSchema(t)
          })
        )
        .optional()
    })
    .refine(
      (data) => {
        const requiredFields = ROLE_REQUIREMENTS[data.role] || []
        if (requiredFields.includes('branch_group_name')) {
          return data.branch_group_name?.trim()
        }
        return true
      },
      {
        message: requiredString(t),
        path: ['branch_group_name']
      }
    )
    .refine((data) => {
      const requiredFields = ROLE_REQUIREMENTS[data.role] || []
      if (requiredFields.includes('client_branch')) {
        return data.client_branch?.length
      }
      return true
    })
    .refine((data) => {
      const requiredFields = ROLE_REQUIREMENTS[data.role] || []
      if (requiredFields.includes('internal_technician')) {
        return data.internal_technician?.length
      }
      return true
    })
