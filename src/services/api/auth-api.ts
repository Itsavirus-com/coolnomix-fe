import { ApiCore } from './api-core'

import type { Payload } from './api-core.types'

export class AuthApi extends ApiCore {
  async login(payload: Payload = {}) {
    return await this.post({
      path: 'login',
      payload
    })
  }

  async logout() {
    return await this.delete({ path: 'logout' })
  }

  async register(payload: Payload = {}) {
    return await this.post({
      path: '/auth/signup/client-branch',
      payload
    })
  }

  async forgotPassword(payload: Payload = {}) {
    return await this.post({
      path: 'password',
      payload
    })
  }

  async resetPassword(payload: Payload = {}) {
    return await this.put({
      path: 'password',
      payload
    })
  }

  async updatePassword(payload = {}) {
    return await this.put({
      path: 'password',
      payload
    })
  }

  async getUserProfile() {
    return await this.get({
      path: 'profile'
    })
  }
}

export const authApi = new AuthApi()
