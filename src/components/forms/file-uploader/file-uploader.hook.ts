import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { formatBytes } from '@/utils/files'

import type { FileType } from './file-uploader.types'

export default function useFileUploader(
  showPreview = true,
  multiSelect = false,
  defaultValues?: FileType[],
  onFileUpload?: (files?: FileType[]) => void,
  maxFiles?: number
) {
  const t = useTranslations('common')

  const handleAcceptedFiles = (files: FileType[]) => {
    const allFiles: FileType[] = []

    if (showPreview) {
      files.map((file) => {
        return {
          ...file,
          preview: file.type.split('/')[0] === 'image' ? URL.createObjectURL(file) : null,
          formattedSize: formatBytes(file.size)
        }
      })
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
    const filteredFiles = values.filter((f) => f?.preview !== file?.preview)

    if (onFileUpload) {
      onFileUpload(filteredFiles)
    }
  }

  return {
    handleAcceptedFiles,
    removeFile
  }
}
