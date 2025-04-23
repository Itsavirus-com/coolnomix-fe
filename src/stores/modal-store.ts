import { proxy } from 'valtio'

import type { ModalStore } from './modal-store.types'

export const modalStore = proxy<ModalStore>({
  visible: false,
  title: null,
  message: null,
  confirmLabel: null,
  cancelLabel: null,
  onConfirm: null,
  onCancel: null
})
