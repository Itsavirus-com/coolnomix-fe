import { Metadata } from 'next'
import React from 'react'

import SelectLanguageCards from '@/_components/select-language-cards/SelectLanguageCards'
import Description from '@/components/description/Description'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Select language - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = () => {
  return (
    <main>
      <section className='content-placement-center'>
        <div className='flex w-[516px] flex-col items-center'>
          <Description label='Select Language' className='mb-6 text-center' titleTag='h1'>
            Pick your preferred language to continue
          </Description>
          <SelectLanguageCards />
        </div>
      </section>
    </main>
  )
}

export default Page
