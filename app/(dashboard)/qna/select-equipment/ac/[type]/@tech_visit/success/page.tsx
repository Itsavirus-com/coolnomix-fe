import { techVisitSuccessAnimation } from '@/assets/images'
import SuccessMessageCard from '@/components/success-message-card'

const Page = () => {
  return (
    <section className='content-placement-center'>
      <SuccessMessageCard
        title='we_ve_got_your_request'
        description='thank_you_your_request_has_been_received'
        buttonLabel='view_status'
        buttonLink='#'
        image={techVisitSuccessAnimation}
      />
    </section>
  )
}

export default Page
