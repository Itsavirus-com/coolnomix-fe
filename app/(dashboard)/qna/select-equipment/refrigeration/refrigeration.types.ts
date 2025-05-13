import { DetailsFormProps } from '../ac/details-forms/details-forms.types'

export type RefrigerationProps = DetailsFormProps & {
  handleSubmit?: (values: unknown) => Promise<void>
}
