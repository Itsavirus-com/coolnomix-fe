import React, { Suspense } from 'react'

import ReviewTabs from './_components/review-tabs/ReviewTabs'

const Page = () => {
  return (
    <main>
      <section className='content-placement-center content-placement-center--start'>
        <Suspense>
          <ReviewTabs />
        </Suspense>
      </section>
    </main>
  )
}

export default Page
