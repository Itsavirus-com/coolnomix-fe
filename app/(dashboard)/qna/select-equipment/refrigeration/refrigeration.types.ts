import { z } from 'zod'

import { formSchema } from './regrigeration.scheme'
import { DetailsFormProps } from '../ac/details-forms/details-forms.types'

export type RefrigerationProps = DetailsFormProps & {
  handleSubmit?: (values: z.infer<typeof formSchema>) => Promise<void>
}
