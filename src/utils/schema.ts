import { isValidPhoneNumber } from 'libphonenumber-js'
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

export const requiredPhoneNumberSchema = (t: TFunction) =>
  z
    .string({
      required_error: requiredString(t)
    })
    .refine((value) => {
      return isValidPhoneNumber(value)
    }, t('invalid_phone_number'))

export const requiredNpwpSchema = (t: TFunction) =>
  z
    .string({
      required_error: requiredString(t)
    })
    .min(16, t('npwp_must_be_at_least_16_digits'))
    .refine((val) => /^\d+$/.test(val), {
      message: t('npwp_must_contain_only_digits')
    })

export const passwordSchema = (t: TFunction) =>
  z
    .string({
      required_error: requiredString(t)
    })
    .min(8, t('password_must_be_at_least_8_characters'))
    .refine((password) => /[A-Z]/.test(password), {
      message: t('password_must_contain_at_least_one_uppercase_letter')
    })
    .refine((password) => /[a-z]/.test(password), {
      message: t('password_must_contain_at_least_one_lowercase_letter')
    })
    .refine((password) => /[0-9]/.test(password), {
      message: t('password_must_contain_at_least_one_number')
    })
    .refine((password) => /[^A-Za-z0-9]/.test(password), {
      message: t('password_must_contain_at_least_one_special_character')
    })
    .refine((password) => !/\s/.test(password), {
      message: t('password_must_not_contain_spaces')
    })
