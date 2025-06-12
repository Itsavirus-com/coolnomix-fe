import { Action, TableAction } from '@/components/table/table.types'
import { UserType } from '@/types/general'

type UserManagementAction = Exclude<Action, 'delete' | 'view'>

export type UserManagementTableAction = TableAction<UserManagementAction>

export type AccountStatus = 'active' | 'inactive' | 'pending'

export type UserManagementTableType = {
  email_address: string
  name: string
  account_status: AccountStatus
  role: UserType
  action: UserManagementTableAction[]
}

export type AccountAction = Exclude<Action, 'delete' | 'view'>
