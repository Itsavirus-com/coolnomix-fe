import { proxy } from 'valtio'

import { proxyWithPersist } from './helpers/proxy-persist'
import { QnaDetailsFormsStateStore } from './qna-details-forms.types'

export const defaultQnaDetailsFormsStateStore: QnaDetailsFormsStateStore = {
  stepsForm: [],
  peakLoadTarif: [],
  acPhaseTwo: []
}

const initialState = proxyWithPersist(
  defaultQnaDetailsFormsStateStore,
  'qna-details-forms-state-store'
)

export const qnaDetailsFormsStateStore = proxy({
  state: initialState
})
