import { useSearchParams } from 'next/navigation'

import { UseTableSearchParams } from './table.types'

export const useTableSearchParams: UseTableSearchParams = ({ defaultFilters } = {}) => {
  const [searchParams] = useSearchParams()

  let params = searchParams?.toString()
  const haveFilters = params?.includes('filter')

  if (!haveFilters && defaultFilters) {
    Object.entries(defaultFilters).forEach(([key, value]) => {
      params += `&filter[${key}]=${value}`
    })
  }

  return params?.replace('filter', 'filters').replace('sort', 'sorts').replace('perPage', 'items')
}
