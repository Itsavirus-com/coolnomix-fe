import { getTranslations } from 'next-intl/server'
import React from 'react'

import Description from '@/components/description/Description'

import AssetListForm from '../_components/asset-list-form/AssetListForm'

const Page = async () => {
  const t = await getTranslations('qna')

  return (
    <main>
      <section className='content-placement-center'>
        <div className='w-[578px]'>
          <Description label={t('air_conditioning_asset_list')} className='mb-8' titleTag='h1'>
            {t('if_you_have_a_list_of_air_conditioning_assets_available_you_can_upload_it_here')}
          </Description>
          <AssetListForm inPreview />
        </div>
      </section>
    </main>
  )
}

export default Page
