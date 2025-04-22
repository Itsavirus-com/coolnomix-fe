type UserType = 'super-admin' | 'admin' | 'sentian-technican' | 'client-group' | 'client-branch'

export type PageHeader = {
  title: string
  icon: string
}

export type AppStateStore = {
  locale: string
  userType: UserType
  pageHeader: PageHeader
  readonly isAdmin?: boolean
}
