import { Metadata } from 'next'

import { techVisitSuccessAnimation } from '@/assets/images'
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
        title='we_ve_got_your_request'
        description='thank_you_your_request_has_been_received'
        buttonLabel='view_status'
        buttonLink={listOfBranchPath()}
        image={techVisitSuccessAnimation}
      />
    </section>
  )
}

export default Page
