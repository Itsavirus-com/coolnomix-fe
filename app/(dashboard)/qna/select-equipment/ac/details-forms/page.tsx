import React, { Suspense } from 'react'

import StepFormTabs from './_components/step-form-tabs/StepFormTabs'

const Page = () => {
  return (
    <main>
      <section className='content-placement-center content-placement-center--start'>
        <Suspense>
          <StepFormTabs />
        </Suspense>
      </section>
    </main>
  )
}

export default Page
