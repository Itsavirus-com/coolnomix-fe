type ModalAlignType = 'left' | 'center'

export type ModalProps = {
  visible: boolean
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  align?: ModalAlignType
  onConfirm: () => void
  onCancel?: () => void
  isLoading?: boolean
}
