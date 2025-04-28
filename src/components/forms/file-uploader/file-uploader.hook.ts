import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

import type { FileType } from './file-uploader.types'

export default function useFileUploader(
  showPreview = true,
  multiSelect = false,
  defaultValues?: FileType[],
  onFileUpload?: (files?: FileType[]) => void,
  maxFiles?: number
) {
  const { t } = useTranslation('common')

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) {
      return '0 Bytes'
    }

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
  }

  const handleAcceptedFiles = (files: FileType[]) => {
    const allFiles: FileType[] = []

    if (showPreview) {
      files.map((file) =>
        Object.assign(file, {
          preview: file.type.split('/')[0] === 'image' ? URL.createObjectURL(file) : null,
          formattedSize: formatBytes(file.size)
        })
      )
    }

    if (multiSelect) {
      if (defaultValues?.length >= maxFiles) {
        toast.error(t('cannot_upload_file'), {
          description: t('max_files_reached')
        })
        return
      }
      if (Array.isArray(defaultValues)) {
        allFiles.push(...defaultValues)
      }
      allFiles.push(...files)
    } else {
      allFiles.push(...files)
    }

    if (onFileUpload) {
      onFileUpload(allFiles)
    }
  }

  const removeFile = (values: FileType[], file: FileType) => {
    const filteredFiles = values.filter((f) => f.preview !== file.preview)

    if (!filteredFiles.length) {
      return onFileUpload()
    }

    onFileUpload(filteredFiles)
  }

  return {
    handleAcceptedFiles,
    removeFile
  }
}
