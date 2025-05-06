import { z } from 'zod'

import { formSchema } from './regrigeration.scheme'
import { DetailsFormProps } from '../ac/[type]/@details_forms/details-forms.types'

export type RefrigerationDetailsFormProps = DetailsFormProps & {
  handleSubmit?: (values: z.infer<typeof formSchema>) => Promise<void>
}
