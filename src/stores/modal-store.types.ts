import type { ModalProps } from '../components/modal/types'

export type ShowModalProps = Omit<ModalProps, 'visible'>

export type ModalStore = ShowModalProps & {
  visible: boolean
}
