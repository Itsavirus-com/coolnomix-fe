import { ApiCore } from './api-core'

import type { Payload } from './api-core.types'

export class QnaApi extends ApiCore {
  async requestTechVisit(payload: Payload = {}) {
    this.multipart = false

    return await this.post({
      path: 'technician-visits',
      payload
    })
  }

  async uploadAssetList(payload: Payload = {}) {
    this.multipart = true

    return await this.post({
      path: 'asset-lists',
      payload
    })
  }

  async createAcPhaseOne(payload: Payload = {}) {
    this.multipart = false

    return await this.post({
      path: 'aircons/bulk',
      payload
    })
  }

  async updateAcPhaseTwo(payload: Payload = {}) {
    this.multipart = false

    return await this.put({
      path: `aircons/bulk/installation-details`,
      payload
    })
  }

  async getAcDetailsForms(id: number, payload: Payload = {}) {
    this.multipart = false

    return await this.get({
      path: `aircons/client-branch/${id}`,
      payload
    })
  }
}

export const qnaApi = new QnaApi()
