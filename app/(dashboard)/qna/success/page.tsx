import { Suspense } from 'react'

import SuccessLayout from './_components/success-layout/SuccessLayout'

const Page = () => {
  return (
    <Suspense>
      <SuccessLayout />
    </Suspense>
  )
}

export default Page
