import { create } from 'apisauce'
import { snapshot } from 'valtio'

import { authStore } from '@/stores/auth-store'
// import { setAuthenticatedUser, setRefreshingToken } from '@/stores/auth-store.actions'
import { delay } from '@/utils/delay'

import { getGeneralApiProblem } from './helpers/api-problem'
import { camelizeKeys, snakeCaseKeys } from './helpers/object'
import { serialize } from './helpers/serialize-formdata'

import type { ApiParams, RequestMethod } from './api-core.types'
import type { ApiResponse, ApisauceInstance } from 'apisauce'

export class ApiCore {
  protected baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
  protected api: ApisauceInstance

  /**
   * Use multipart/form-data content type.
   * For file uploading
   */
  protected multipart = false

  /**
   * API Request timeout in milliseconds.
   */
  protected timeout = 50000

  /**
   * Enable blob response type.
   * For file downloading
   */
  protected enableBlobResponse = false

  /**
   * Convert request object key to snake case.
   */
  protected useSnakedKey = false

  /**
   * Add a wrapper object around passed data.
   */
  protected payloadWrapper?: string

  protected addHeaderTransformer() {
    this.api.addRequestTransform((request) => {
      const { authorization } = snapshot(authStore.computed)

      if (authorization) {
        request.headers.Authorization = authorization
      }

      if (this.multipart) {
        request.headers['Content-Type'] = 'multipart/form-data'
      }
    })
  }

  protected addResponseTypeTransformer() {
    this.api.addRequestTransform((request) => {
      if (this.enableBlobResponse) {
        request.responseType = 'blob'
      }
    })
  }

  protected addRequestParamsTransformer() {
    this.api.addRequestTransform((request) => {
      if (this.useSnakedKey) {
        request.params = snakeCaseKeys(request.params)
      }
    })
  }

  protected addPayloadTransformer() {
    this.api.addRequestTransform((request) => {
      const data = this.payloadWrapper ? { [this.payloadWrapper]: request.data } : request.data

      if (this.multipart) {
        request.data = serialize(data, {
          nullsAsUndefined: true,
          useSnakedKey: this.useSnakedKey
        })
      } else {
        request.data = this.useSnakedKey ? snakeCaseKeys(data) : data
      }
    })
  }

  protected addRefreshToken() {
    this.api.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          const { refreshTokenActive } = snapshot(authStore.computed)
          const { refreshingToken, token } = snapshot(authStore.state)

          if (!refreshTokenActive) {
            return Promise.reject(error)
          }

          const originalRequest = error.config
          if (refreshingToken) {
            await delay(1000)
            originalRequest.headers.Authorization = token
            return this.api.axiosInstance(originalRequest)
          }

          try {
            // setRefreshingToken(true)
            const res = await this.refreshToken()
            if (res.ok) {
              originalRequest.headers.Authorization = res.headers.authorization
              return this.api.axiosInstance(originalRequest)
            }
          } catch {
            return Promise.reject(error)
          } finally {
            // setRefreshingToken(false)
          }
        }

        return Promise.reject(error)
      }
    )
  }

  protected addResponseTransformer() {
    this.api.addResponseTransform((response) => {
      if (this.useSnakedKey) {
        response.data = camelizeKeys(response.data)
      }
    })
  }

  protected addResponsePerfMetric() {
    this.api.axiosInstance.interceptors.response.use(
      async (response: any) => {
        try {
          const { httpMetric } = response.config.metadata

          httpMetric.setHttpResponseCode(response.status)
          httpMetric.setResponseContentType(response.headers['content-type'])
          await httpMetric.stop()
        } finally {
          return response
        }
      },
      async (error) => {
        try {
          const { httpMetric } = error.config.metadata

          httpMetric.setHttpResponseCode(error.response.status)
          httpMetric.setResponseContentType(error.response.headers['content-type'])
          await httpMetric.stop()
        } finally {
          return Promise.reject(error)
        }
      }
    )
  }

  protected getBaseURL() {
    return this.baseURL.replace(/\/$/, '')
  }

  constructor() {
    this.api = create({
      timeout: this.timeout,
      baseURL: this.getBaseURL(),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    this.addHeaderTransformer()
    this.addResponseTypeTransformer()
    this.addRequestParamsTransformer()
    this.addPayloadTransformer()
    this.addRefreshToken()
    this.addResponseTransformer()
    this.addResponsePerfMetric()
  }

  protected async processResult(response: ApiResponse<any>) {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return Promise.reject(problem)
      }
    }

    return Promise.resolve(response)
  }

  protected async callApi(method: RequestMethod, { path, payload }: ApiParams) {
    const response: ApiResponse<any> = await this.api[method](path, payload, {
      baseURL: this.getBaseURL()
    })

    return await this.processResult(response)
  }

  protected async get(apiParams: ApiParams) {
    return await this.callApi('get', apiParams)
  }

  protected async post(apiParams: ApiParams) {
    return await this.callApi('post', apiParams)
  }

  protected async put(apiParams: ApiParams) {
    return await this.callApi('put', apiParams)
  }

  protected async patch(apiParams: ApiParams) {
    return await this.callApi('patch', apiParams)
  }

  protected async delete({ path, payload }: ApiParams) {
    return await this.processResult(
      await this.api.delete(path, {}, { data: payload, baseURL: this.getBaseURL() })
    )
  }

  public async refreshToken() {
    const { refreshToken } = snapshot(authStore.state)

    const res = await this.processResult(
      await this.api.get(
        'auth/refresh-token',
        {},
        {
          baseURL: this.getBaseURL(),
          headers: { 'Refresh-Token': refreshToken }
        }
      )
    )

    if (res.ok) {
      // setAuthenticatedUser(res)
    }

    return res
  }
}
