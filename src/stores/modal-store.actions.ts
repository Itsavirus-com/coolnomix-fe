import { modalStore } from './modal-store'

import type { ShowModalProps } from './modal-store.types'

export const showModal = (props: ShowModalProps) => {
  modalStore.visible = true
  modalStore.title = props.title
  modalStore.message = props.message
  modalStore.confirmLabel = props.confirmLabel
  modalStore.cancelLabel = props.cancelLabel
  modalStore.onConfirm = props.onConfirm
  modalStore.onCancel = props.onCancel
  modalStore.align = props.align
  modalStore.type = props.type
}

export const hideModal = () => {
  modalStore.visible = false

  setTimeout(() => {
    modalStore.title = null
    modalStore.message = null
    modalStore.confirmLabel = null
    modalStore.cancelLabel = null
    modalStore.onConfirm = null
    modalStore.onCancel = null
    modalStore.align = null
    modalStore.type = null
  }, 200)
}
