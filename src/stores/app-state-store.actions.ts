import { appStateStore } from './app-state-store'
import { PageHeader } from './app-state-store.types'

export const setLocale = (locale: string) => {
  appStateStore.state.locale = locale
}

export const setPageHeader = (pageHeader: PageHeader) => {
  appStateStore.state.pageHeader = pageHeader
}
