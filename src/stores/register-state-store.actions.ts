import { registerStateStore } from './register-state-store'

export const setGroupBranchProfile = (email: string, name: string) => {
  registerStateStore.state.email = email
  registerStateStore.state.name = name
}

export const setGroupBranchPassword = (password: string, confirmPassword: string) => {
  registerStateStore.state.password = password
  registerStateStore.state.confirm_password = confirmPassword
}

export const resetRegisterState = () => {
  registerStateStore.state.email = ''
  registerStateStore.state.name = ''
  registerStateStore.state.password = ''
  registerStateStore.state.confirm_password = ''
}
