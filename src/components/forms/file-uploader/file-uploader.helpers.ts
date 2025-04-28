import { toast } from 'sonner'

import { getTranslate } from '@/locales/i18n'

import type { FileError, FileRejection } from 'react-dropzone'

const t = getTranslate('common')

export const formatValue = (value: any) => {
  if (typeof value === 'string') {
    return [{ preview: value }]
  }

  if (Array.isArray(value)) {
    return value.map((item) => {
      if (item?.url) {
        return { preview: item.url }
      }

      return item
    })
  }

  return value
}

export const handleFileUploadError = (fileRejections: FileRejection[]) => {
  const uniqueErrors = new Map()

  fileRejections.forEach((file: FileRejection) => {
    file.errors.forEach((err: FileError) => {
      // Use error code as key to identify unique errors
      if (!uniqueErrors.has(err.code)) {
        uniqueErrors.set(err.code, err.message)
      }
    })
  })

  // Show only one toast for each unique error
  uniqueErrors.forEach((message) => {
    toast.error(t('cannot_upload_file'), {
      description: message
    })
  })
}
