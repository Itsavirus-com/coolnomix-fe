import type { FC } from 'react'

import { useTranslations } from 'next-intl'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { cn } from '@/libs/utils'
import { hideModal } from '@/stores/modal-store.actions'

import Button from '../button/Button'

import type { ModalProps } from './modal.types'

const Modal: FC<ModalProps> = (props) => {
  const t = useTranslations('common')

  const {
    visible,
    title,
    message,
    confirmLabel = t('confirm'),
    cancelLabel = t('cancel'),
    align = 'left',
    onConfirm,
    onCancel = hideModal,
    isLoading,
    ...rest
  } = props

  return (
    <AlertDialog open={visible} {...rest}>
      <AlertDialogContent className={cn('!max-w-[626px]', align === 'center' && '!text-center')}>
        <AlertDialogHeader className={cn(align === 'center' && '!text-center')}>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={cn(align === 'center' && '!justify-center')}>
          <AlertDialogCancel onClick={onCancel}>{cancelLabel}</AlertDialogCancel>
          <Button size='lg' label={confirmLabel} onClick={onConfirm} isLoading={isLoading} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Modal
