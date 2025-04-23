import { ApiCore } from './api-core'

export class SwrApi extends ApiCore {
  protected timeout = 50000

  async fetch(path: string, params?: Record<string, any>) {
    return await this.get({ path, payload: params })
  }
}

export const swrApi = new SwrApi()
