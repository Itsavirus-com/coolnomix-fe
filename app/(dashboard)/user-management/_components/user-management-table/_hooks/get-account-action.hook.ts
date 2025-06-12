import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { userManagementEditPath } from '@/config/paths/user-management-path'
import { showModal } from '@/stores/modal-store.actions'

import {
  AccountAction,
  AccountStatus,
  UserManagementTableAction
} from '../user-management-table.types'

const STATUS_ACTION_CONFIG: Record<string, Omit<UserManagementTableAction, 'action'>[]> = {
  active: [{ label: 'deactivate', variant: 'default' }],
  inactive: [{ label: 'activate', variant: 'default' }],
  pending: [{ label: 'resend', variant: 'default' }]
}

const BASE_ACTIONS: Omit<UserManagementTableAction, 'action'>[] = [
  { label: 'edit', variant: 'outline' }
]

export const useAccountAction = () => {
  const t = useTranslations('user_management')

  const router = useRouter()

  const editAction = () => {
    router.push(userManagementEditPath('1'))
  }

  const deactivateAction = () => {
    showModal({
      title: t('are_you_absolutely_sure'),
      message: t('this_action_will_deactivate_the_account_and_revoke_all_associated_access'),
      confirmLabel: t('deactivate'),
      cancelLabel: t('cancel'),
      align: 'center',
      onConfirm: () => {}
    })
  }

  const activateAction = () => {
    console.log('activate')
  }

  const resendAction = () => {
    console.log('resend')
  }

  const actionHandlers: Record<AccountAction, () => void> = {
    edit: editAction,
    deactivate: deactivateAction,
    activate: activateAction,
    resend: resendAction
  }

  const getAccountAction = (status: AccountStatus): UserManagementTableAction[] => {
    const statusActions = STATUS_ACTION_CONFIG[status] || []

    const allActionConfigs = [...BASE_ACTIONS, ...statusActions]

    return allActionConfigs.map((actionConfig) => ({
      ...actionConfig,
      action: actionHandlers[actionConfig.label]
    }))
  }

  return {
    getAccountAction
  }
}
