import { TFunction } from 'next-intl'
import { z } from 'zod'

import { requiredString } from '@/utils/required-string'
import { passwordSchema } from '@/utils/schema'

export const formSchema = (t: TFunction) =>
  z
    .object({
      password: passwordSchema(t),
      confirm_password: z.string({
        required_error: requiredString(t)
      })
    })
    .refine((data) => data.password === data.confirm_password, {
      message: t('passwords_do_not_match'),
      path: ['confirm_password']
    })
