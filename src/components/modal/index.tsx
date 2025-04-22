import type { FC } from 'react'

import { useTranslation } from 'react-i18next'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { hideModal } from '@/stores/modal-store.actions'

import type { ModalProps } from './types'

const Modal: FC<ModalProps> = (props) => {
  const { t } = useTranslation('common')

  const {
    visible,
    title,
    message,
    confirmLabel = t('confirm'),
    cancelLabel = t('cancel'),
    onConfirm,
    onCancel = hideModal,
    ...rest
  } = props

  return (
    <AlertDialog open={visible} {...rest}>
      <AlertDialogContent className='!max-w-[626px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Modal
