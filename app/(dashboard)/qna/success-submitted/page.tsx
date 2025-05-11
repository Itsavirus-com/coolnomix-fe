'use client'

import SuccessMessageCard from '@/components/success-message-card/SuccessMessageCard'
import { listOfBranchPath } from '@/config/paths'

import { useSuccessSubmitted } from './success-submitted.hook'

const Page = () => {
  const { title, description, image } = useSuccessSubmitted()

  return (
    <main>
      <section className='content-placement-center'>
        <SuccessMessageCard
          title={title}
          description={description}
          buttonLabel='view_status'
          buttonLink={listOfBranchPath()}
          image={image}
        />
      </section>
    </main>
  )
}

export default Page
