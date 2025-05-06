import SuccessMessageCard from '@/components/success-message-card'

const Page = () => {
  return (
    <section className='content-placement-center'>
      <SuccessMessageCard
        title='submission_successful'
        description='submission_successful_description'
        buttonLabel='view_status'
        buttonLink='#'
      />
    </section>
  )
}

export default Page
