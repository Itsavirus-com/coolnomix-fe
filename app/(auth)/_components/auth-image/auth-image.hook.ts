import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { getAuthImageForPath } from './auth-image.helpers'

export const useAuthImage = () => {
  const pathname = usePathname()

  const path = `/${pathname.split('/')[1]}`

  const loginImageSrc = useMemo(() => {
    return getAuthImageForPath(path)
  }, [path])

  return { loginImageSrc }
}
