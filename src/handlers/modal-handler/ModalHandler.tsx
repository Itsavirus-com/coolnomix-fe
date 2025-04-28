import React, { lazy } from 'react'
import { useSnapshot } from 'valtio'

import { modalStore } from '@/stores/modal-store'
import { hideModal } from '@/stores/modal-store.actions'

const Modal = lazy(() => import('@/components/modal/Modal'))

const ModalHandler = () => {
  const {
    visible,
    title,
    message,
    align,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel = () => {}
  } = useSnapshot(modalStore)

  const confirm = () => {
    onConfirm()
    hideModal()
  }

  const cancel = () => {
    onCancel()
    hideModal()
  }

  return (
    <Modal
      visible={visible}
      title={title}
      message={message}
      align={align}
      confirmLabel={confirmLabel}
      cancelLabel={cancelLabel}
      onConfirm={confirm}
      onCancel={cancel}
    />
  )
}

export default ModalHandler
