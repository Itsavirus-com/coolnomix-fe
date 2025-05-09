import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import AssetListForm from '@/(dashboard)/qna/_components/asset-list-form/AssetListForm'
import Description from '@/components/description/Description'
import { ENV } from '@/libs/env'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Asset List - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = async () => {
  const t = await getTranslations('qna')

  return (
    <section className='content-placement-center'>
      <div className='w-[578px]'>
        <Description label={t('air_conditioning_asset_list')} className='mb-8' titleTag='h1'>
          {t('if_you_have_a_list_of_air_conditioning_assets_available_you_can_upload_it_here')}
        </Description>
        <AssetListForm />
      </div>
    </section>
  )
}

export default Page
