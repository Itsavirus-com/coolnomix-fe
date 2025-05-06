import type { ComponentProps } from 'react'

export type BreadcrumbItem = {
  key: string | number | bigint
  label: string
  href?: string
}

export type BreadcrumbsProps = ComponentProps<'div'> & {
  items: BreadcrumbItem[]
}
