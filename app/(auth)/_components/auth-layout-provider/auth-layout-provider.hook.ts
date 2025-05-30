import { usePathname } from 'next/navigation'

import { forgotPasswordSuccessPath } from '@/config/paths/auth-path'

export const useAuthLayoutProvider = () => {
  const pathname = usePathname()

  const isSuccessPage = pathname === forgotPasswordSuccessPath()

  return { isSuccessPage }
}
