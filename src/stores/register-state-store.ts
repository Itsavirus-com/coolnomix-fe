import { proxy } from 'valtio'

import { proxyWithPersist } from './helpers/proxy-persist'
import { RegisterStateStore } from './register-state-store.types'

export const defaultRegisterStateStore: RegisterStateStore = {
  email: '',
  name: '',
  password: '',
  confirm_password: ''
}

const initialState = proxyWithPersist(defaultRegisterStateStore, 'register-state-store')

export const registerStateStore = proxy({
  state: initialState
})
