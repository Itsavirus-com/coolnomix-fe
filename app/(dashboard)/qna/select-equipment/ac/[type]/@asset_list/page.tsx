'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import Description from '@/components/description/Description'
import { ControlledFileUploader } from '@/components/forms'
import { FormProvider } from '@/components/ui/form'

import { useAssetList } from './asset-list.hook'

const acceptedFile = {
  'application/pdf': ['.pdf'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
}

const Page = () => {
  const { t } = useTranslation('qna')

  const { methods, buttons, onSubmit } = useAssetList()

  return (
    <section className='content-placement-center'>
      <div className='w-[578px]'>
        <Description label={t('air_conditioning_asset_list')} className='mb-8' titleTag='h1'>
          {t('if_you_have_a_list_of_air_conditioning_assets_available_you_can_upload_it_here')}
        </Description>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <ControlledFileUploader
            required
            name='assetList'
            title={t('file_upload')}
            description={t('add_your_media_here_we_only_support_pdf_and_excel_files')}
            inputLabel={t('upload_file')}
            acceptedFile={acceptedFile}
          />
          <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
        </FormProvider>
      </div>
    </section>
  )
}

export default Page
