import { PaginationState, SortingState } from '@tanstack/react-table'

/**
 * Safely parse integer with fallback
 */
const safeParseInt = (value: string | null, fallback: number): number => {
  if (!value) return fallback
  const parsed = parseInt(value, 10)
  return isNaN(parsed) ? fallback : Math.max(0, parsed)
}

/**
 * Update URL with new parameters without page reload
 */
export const updateUrlParams = (pathname: string, newParams: URLSearchParams): void => {
  const url = newParams.toString() ? `${pathname}?${newParams.toString()}` : pathname
  window.history.pushState({}, '', url)
}

/**
 * Extract pagination state from URL search parameters
 */
export const getPaginationFromSearchParams = (searchParams: URLSearchParams): PaginationState => {
  const page = searchParams.get('page')
  const perPage = searchParams.get('perPage')

  return {
    pageIndex: safeParseInt(page, 1) - 1, // Convert 1-based to 0-based
    pageSize: safeParseInt(perPage, 10)
  }
}

/**
 * Extract sorting state from URL search parameters
 */
export const getSortFromSearchParams = (searchParams: URLSearchParams): SortingState => {
  const sortField = searchParams.get('sort')
  const sortDir = searchParams.get('dir')

  if (!sortField) return []

  return [
    {
      id: sortField,
      desc: sortDir === 'desc'
    }
  ]
}

/**
 * Create URL search parameters for sorting
 */
export const getSortParams = (searchParams: URLSearchParams): URLSearchParams => {
  const params = new URLSearchParams(searchParams)

  // Remove existing sort parameters
  params.delete('sort')
  params.delete('dir')

  return params
}

/**
 * Create URL search parameters for pagination
 */
export const getPaginationParams = (searchParams: URLSearchParams): URLSearchParams => {
  return new URLSearchParams(searchParams)
}

/**
 * Update URL search parameters with new sorting
 */
export const updateSortingParams = (
  searchParams: URLSearchParams,
  sorting: SortingState
): URLSearchParams => {
  const params = getPaginationParams(searchParams)

  // Remove existing sort parameters
  params.delete('sort')
  params.delete('dir')

  if (sorting.length > 0) {
    const { id, desc } = sorting[0]
    params.set('sort', id)
    params.set('dir', desc ? 'desc' : 'asc')
  }

  return params
}

/**
 * Update URL search parameters with new pagination
 */
export const updatePaginationParams = (
  searchParams: URLSearchParams,
  pagination: PaginationState
): URLSearchParams => {
  const params = getPaginationParams(searchParams)

  params.set('page', (pagination.pageIndex + 1).toString()) // Convert 0-based to 1-based
  params.set('perPage', pagination.pageSize.toString())

  return params
}

/**
 * Extract filters from URL search parameters
 */
export const getFiltersFromSearchParams = (searchParams: URLSearchParams): Record<string, any> => {
  const filters: Record<string, any> = {}

  searchParams.forEach((value, key) => {
    if (key.startsWith('filter[') && key.endsWith(']')) {
      const field = key.slice(7, -1) // Remove 'filter[' and ']'
      // Handle empty values
      if (value.trim()) {
        filters[field] = value
      }
    }
  })

  return filters
}

/**
 * Update URL search parameters with new filters
 */
export const updateFiltersParams = (
  searchParams: URLSearchParams,
  filters: Record<string, any>
): URLSearchParams => {
  const params = new URLSearchParams(searchParams)

  // Remove existing filter parameters
  const keysToDelete: string[] = []
  params.forEach((_, key) => {
    if (key.startsWith('filter[')) {
      keysToDelete.push(key)
    }
  })
  keysToDelete.forEach((key) => params.delete(key))

  // Add new filter parameters
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(`filter[${key}]`, value.toString())
    }
  })

  return params
}

/**
 * Remove a specific filter and update URL
 */
export const removeFilter = (
  searchParams: URLSearchParams,
  pathname: string,
  filterKey: string
): void => {
  const currentFilters = getFiltersFromSearchParams(searchParams)
  const newFilters = { ...currentFilters }
  delete newFilters[filterKey]

  const params = updateFiltersParams(searchParams, newFilters)
  params.delete('page') // Reset pagination when filtering
  updateUrlParams(pathname, params)
}

/**
 * Clear all filters and update URL
 */
export const clearAllFilters = (searchParams: URLSearchParams, pathname: string): void => {
  const params = updateFiltersParams(searchParams, {})
  params.delete('page') // Reset pagination when filtering
  updateUrlParams(pathname, params)
}

/**
 * Generate page size options with validation
 */
export const generatePageSizeOptions = (sizes = [5, 10, 20, 30, 40, 50]) => {
  return sizes
    .filter((size) => size > 0) // Ensure positive numbers
    .map((size) => ({
      label: size.toString(),
      value: size.toString()
    }))
}

/**
 * Calculate total pages
 */
export const calculateTotalPages = (totalItems: number, pageSize: number): number => {
  return Math.ceil(Math.max(0, totalItems) / Math.max(1, pageSize))
}

/**
 * Check if current page is valid
 */
export const isValidPage = (pageIndex: number, totalPages: number): boolean => {
  return pageIndex >= 0 && pageIndex < Math.max(1, totalPages)
}
