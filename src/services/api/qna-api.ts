import { ApiCore } from './api-core'

import type { Payload } from './api-core.types'

export class QnaApi extends ApiCore {
  async requestTechVisit(payload: Payload = {}) {
    return await this.post({
      path: 'technician-visits',
      payload
    })
  }
}

export const qnaApi = new QnaApi()
