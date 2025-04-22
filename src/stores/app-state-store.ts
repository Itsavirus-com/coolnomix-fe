import { proxy } from 'valtio'

import { proxyWithPersist } from './helpers/proxy-persist'

import type { AppStateStore } from './app-state-store.types'

export const defaultAppStateStore: AppStateStore = {
  locale: 'en',
  userType: 'admin',
  pageHeader: {
    title: '',
    icon: ''
  }
}

const initialState = proxyWithPersist(defaultAppStateStore, 'app-state-store')

export const appStateStore = proxy({
  state: initialState
})
