'use client'

import type { ReactNode } from 'react'

import { useParams } from 'next/navigation'
import React, { useCallback } from 'react'

export default function Layout({
  asset_list,
  details_forms,
  tech_visit
}: {
  asset_list: ReactNode
  details_forms: ReactNode
  tech_visit: ReactNode
}) {
  const { type } = useParams()

  const renderLayout = useCallback(() => {
    switch (type) {
      case 'asset-list':
        return asset_list
      case 'details-forms':
        return details_forms
      case 'tech-visit':
        return tech_visit
      default:
        return null
    }
  }, [type])

  return <main>{renderLayout()}</main>
}
