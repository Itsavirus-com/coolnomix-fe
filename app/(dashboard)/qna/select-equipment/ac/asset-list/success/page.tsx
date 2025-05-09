import { Metadata } from 'next'

import SuccessMessageCard from '@/components/success-message-card/SuccessMessageCard'
import { listOfBranchPath } from '@/config/paths'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Success - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return (
    <section className='content-placement-center'>
      <SuccessMessageCard
        title='submission_successful'
        description='submission_successful_description'
        buttonLabel='view_status'
        buttonLink={listOfBranchPath()}
      />
    </section>
  )
}

export default Page
