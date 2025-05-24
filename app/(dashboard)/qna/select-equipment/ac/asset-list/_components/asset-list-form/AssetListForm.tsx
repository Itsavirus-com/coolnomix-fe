'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import { ControlledFileUploader } from '@/components/forms'
import { FormProvider } from '@/components/ui/form'
import { acceptedFileExcelAndPdf } from '@/config/constant'

import { useAssetListForm } from './asset-list-form.hook'

import type { AssetListFormProps } from './asset-list-types'

const AssetListForm: FC<AssetListFormProps> = (props) => {
  const { inPreview } = props

  const t = useTranslations('qna')

  const { methods, buttons, onSubmit } = useAssetListForm(inPreview)

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <ControlledFileUploader
        required
        name='file'
        title={t('file_upload')}
        description={t('add_your_media_here_we_only_support_pdf_and_excel_files')}
        inputLabel={t('upload_file')}
        acceptedFile={acceptedFileExcelAndPdf}
        disabled={inPreview}
      />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default AssetListForm
