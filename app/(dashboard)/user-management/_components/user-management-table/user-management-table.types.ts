import { TableAction } from '@/components/table/table.types'
import { UserType } from '@/types/general'

export type UserManagementTableType = {
  email_address: string
  name: string
  account_status: string
  role: UserType
  action: TableAction[]
}
