'use client'

import { PaginationState, SortingState, Updater } from '@tanstack/react-table'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import {
  calculateTotalPages,
  getPaginationFromSearchParams,
  getSortFromSearchParams,
  isValidPage,
  updatePaginationParams,
  updateSortingParams,
  updateUrlParams
} from './table.helper'
import { UseTableParams } from './table.types'

export const useTableParams = (params: UseTableParams) => {
  const {
    data,
    pageSize = 10,
    enablePagination = true,
    enableSorting = true,
    manualPagination = false,
    manualSorting = false,
    pageCount: manualPageCount,
    searchParams: defaultSearchParams
  } = params

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const pagination: PaginationState = useMemo(() => {
    if (!enablePagination) return { pageIndex: 0, pageSize }

    const urlPagination = getPaginationFromSearchParams(searchParams)
    const calculatedPageCount = calculateTotalPages(data?.length || 0, pageSize)

    // Validate page index
    let validPageIndex = urlPagination.pageIndex
    if (!isValidPage(validPageIndex, calculatedPageCount)) {
      validPageIndex = 0 // Reset to first page if invalid
    }

    return {
      pageIndex: validPageIndex,
      pageSize: urlPagination.pageSize || pageSize
    }
  }, [searchParams, enablePagination, pageSize, data?.length])

  const sorting: SortingState = useMemo(() => {
    if (!enableSorting) return []

    const urlSorting = getSortFromSearchParams(searchParams)
    return urlSorting.length > 0 ? urlSorting : defaultSearchParams?.defaultSorting || []
  }, [searchParams, enableSorting, defaultSearchParams])

  const setPagination = useCallback(
    (updater: Updater<PaginationState>) => {
      const newPagination = typeof updater === 'function' ? updater(pagination) : updater

      if (!manualPagination) {
        const updatedParams = updatePaginationParams(searchParams, newPagination)
        updateUrlParams(pathname, updatedParams)
      }
    },
    [pagination, manualPagination, searchParams, pathname]
  )

  const setSorting = useCallback(
    (updater: Updater<SortingState>) => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater

      if (!manualSorting) {
        const updatedParams = updateSortingParams(searchParams, newSorting)
        updateUrlParams(pathname, updatedParams)
      }
    },
    [sorting, manualSorting, searchParams, pathname]
  )

  // Calculate page count with better validation
  const pageCount = useMemo(() => {
    if (manualPageCount !== undefined) return Math.max(1, manualPageCount)
    return calculateTotalPages(data?.length || 0, pagination.pageSize)
  }, [data?.length, pagination.pageSize, manualPageCount])

  // Get paginated data (for client-side pagination)
  const paginatedData = useMemo(() => {
    if (manualPagination || !data) return data || []

    const start = pagination.pageIndex * pagination.pageSize
    const end = start + pagination.pageSize
    return data.slice(start, end)
  }, [data, pagination.pageIndex, pagination.pageSize, manualPagination])

  return {
    pagination,
    setPagination,
    sorting,
    setSorting,
    pageCount,
    paginatedData
  }
}
