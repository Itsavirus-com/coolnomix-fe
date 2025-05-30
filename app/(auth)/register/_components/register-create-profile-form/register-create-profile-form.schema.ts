import { TFunction } from 'next-intl'
import { z } from 'zod'

import {
  requiredEmailSchema,
  requiredNpwpSchema,
  requiredPhoneNumberSchema,
  requiredStringSchema
} from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z.object({
    legalCompanyName: requiredStringSchema(t),
    phoneNumber: requiredStringSchema(t),
    phoneNumberCountry: requiredPhoneNumberSchema(t),
    picName: requiredStringSchema(t),
    picEmail: requiredEmailSchema(t),
    picNpwp: requiredNpwpSchema(t)
  })
