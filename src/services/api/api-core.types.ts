import type { GeneralApiProblem } from './helpers/api-problem.types'

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type Payload = Record<string, any>

export type ApiParams = {
  path: string
  payload?: Payload
}

export type ApiSuccessResult<Data = any> = {
  ok: true
  data: Data
}

export type ApiResult = ApiSuccessResult | GeneralApiProblem
