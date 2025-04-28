import type { FC } from 'react'

import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../ui/breadcrumb'

import type { BreadcrumbsProps } from './types'

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { items } = props

  if (!items?.length) {
    return null
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items?.map(({ label, href }, index) => (
          <div key={uuidv4()} className='flex items-center gap-1.5'>
            <BreadcrumbItem>
              {href ? (
                <BreadcrumbLink
                  href={href}
                  className={
                    index === items.length - 1 ? 'text-foreground' : 'text-muted-foreground'
                  }
                >
                  {label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage
                  className={
                    index === items.length - 1 ? 'text-foreground' : 'text-muted-foreground'
                  }
                >
                  {label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index !== items.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default memo(Breadcrumbs)
