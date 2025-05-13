import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from './required-string'

export const requiredDateSchema = (t: TFunction) =>
  z
    .date({
      required_error: requiredString(t)
    })
    .nullable()

export const requiredStringSchema = (t: TFunction) =>
  z
    .string({
      required_error: requiredString(t)
    })
    .min(1, requiredString(t))

export const fileSchema = z.object({
  formattedSize: z.string(),
  path: z.string(),
  preview: z.string(),
  relativePath: z.string()
})

export const requiredFilesSchema = (t: TFunction) =>
  z.union([
    z.array(z.instanceof(File)).min(1, requiredString(t)),
    z.array(fileSchema).min(1, requiredString(t))
  ])

export const optionalFilesSchema = () =>
  z.union([z.array(z.instanceof(File)), z.array(fileSchema).optional()])

export const requiredEmailSchema = (t: TFunction) =>
  z
    .string({
      required_error: requiredString(t)
    })
    .min(1, requiredString(t))
    .email(t('please_enter_a_valid_email_address'))
    .refine(
      (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
      },
      {
        message: t('please_enter_a_valid_email_address')
      }
    )
