import { useController, useFormContext } from 'react-hook-form'

import { dataUrlsToFiles } from '@/utils/files'

export const useMediaInputPreview = (name: string) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control
  })

  const file = field.value ? dataUrlsToFiles([field?.value])[0] : null

  return {
    file,
    field
  }
}
