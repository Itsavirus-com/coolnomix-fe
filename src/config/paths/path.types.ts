export type PathParams = string | number | Record<string, any>

export type PathGenerator = () => string
export type PathGeneratorWithId = (id?: number | string) => string
export type PathGeneratorWithParams = (params?: PathParams) => string
