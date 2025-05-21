import { useRouter } from 'next/navigation'

import { QNA_FORM_STORAGE_KEY } from '@/config/constant'
import { qnaRefrigerationReviewPath, qnaSuccessPath } from '@/config/paths'
import { remove } from '@/utils/storage'

export const useRefrigerationTabsContent = () => {
  const router = useRouter()

  const handleReview = () => {
    router.push(qnaRefrigerationReviewPath())
  }

  const handleSubmit = async (values: unknown) => {
    console.log(values)
    remove(QNA_FORM_STORAGE_KEY)
    router.push(qnaSuccessPath())
  }

  return {
    handleReview,
    handleSubmit
  }
}
