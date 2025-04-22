type AnyObject = Record<string, any>

export type FetcherParams = {
  path: string
  id?: string
  params?: AnyObject
}

export type BuildHeader = () => AnyObject

export type BuildUrl = (args: FetcherParams) => string

export type CamelizeKeys = (data: AnyObject | AnyObject[]) => any
