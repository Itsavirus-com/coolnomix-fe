import type { ComponentProps } from 'react'

import type { Accept } from 'react-dropzone'

export type FileType = File & {
  preview?: string
  formattedSize?: string
}

export type FileUploaderProps = {
  inputLabel?: string
  name?: string
  value?: FileType[]
  showPreview?: boolean
  hint?: string
  isInvalid?: boolean
  multiSelect?: boolean
  acceptedFile?: Accept
  maxFiles?: number
  disabled?: boolean
  uploadFileLabel?: string
  onFileUpload?: (files?: FileType[]) => void
}

export type ControlledFileUploaderProps = FileUploaderProps & {
  label?: string
  title?: string
  description?: string
  acceptedFileHint?: string
  required?: boolean
} & ComponentProps<'div'>
