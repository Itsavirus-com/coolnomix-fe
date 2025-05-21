import { Metadata } from 'next'

import SuccessMessageCard from '@/components/success-message-card/SuccessMessageCard'
import { ENV } from '@/libs/env'

import { getSuccessMessage } from './success.helpers'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Success - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = async ({
  searchParams
}: {
  searchParams: Promise<{
    type: string
  }>
}) => {
  const { type } = await searchParams
  const { title, description, buttonLabel, image, imageAlt, buttonLink } =
    await getSuccessMessage(type)

  return (
    <main>
      <section className='content-placement-center'>
        <SuccessMessageCard
          title={title}
          description={description}
          buttonLabel={buttonLabel}
          buttonLink={buttonLink}
          image={image}
          imageAlt={imageAlt}
        />
      </section>
    </main>
  )
}

export default Page
