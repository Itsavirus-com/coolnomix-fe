import { z } from 'zod'

import { formSchema } from './add-user-form.schema'

export type AddUserFormProps = {
  isShow: boolean
}

export type FormValues = z.infer<ReturnType<typeof formSchema>>
