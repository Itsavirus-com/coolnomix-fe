import type { PathParams } from './path.types'

export const generateFilterQueries = (filters: Record<string, any>): string => {
  if (!filters) {
    return ''
  }

  const queries = []

  Object.entries(filters).forEach(([key, value]) => {
    if (key !== 'search' && value) {
      queries.push(`filter[${key}]=${value}`)
    }
  })

  if (filters.search) {
    queries.push(`search=${filters.search}`)
  }

  return queries.join('&')
}

export const createPath = (path: string, params?: PathParams) => {
  if (!params) {
    return path
  }

  if (typeof params !== 'object') {
    return `${path}/${params}`
  }

  const { id, suffix, ...queries } = params

  if (id) {
    path += `/${id}`
  }

  if (suffix) {
    path += `/${suffix}`
  }

  if (Object.keys(queries).length) {
    const filterQueries = generateFilterQueries(queries)
    path += `?${filterQueries}`
  }

  return path.replace(/\/{2,}/g, '/')
}
