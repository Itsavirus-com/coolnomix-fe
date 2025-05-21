import { useSearchParams } from 'next/navigation'

import { FormSidebarTab } from './form-sidebar.types'

export const useFormSidebar = (tabs: FormSidebarTab[]) => {
  const searchParams = useSearchParams()

  const currentTab = searchParams.get('tab') || tabs[0].value

  return { currentTab }
}
