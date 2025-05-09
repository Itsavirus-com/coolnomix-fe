import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import { ControlledFileUploader } from '@/components/forms/file-uploader/ControlledFileUploader'
import { FormProvider } from '@/components/ui/form'
import { acceptedFileImage } from '@/config/constant'

import { useUploadForm } from './upload-form.hook'
import { DetailsFormProps } from '../../details-forms.types'

const UploadForm: FC<DetailsFormProps> = (props) => {
  const { handleContinue } = props

  const t = useTranslations('qna')

  const { methods, onSubmit, buttons } = useUploadForm()

  return (
    <FormProvider
      methods={methods}
      onSubmit={(values) => {
        onSubmit(values)
        handleContinue?.()
      }}
    >
      <ControlledFileUploader
        required
        name='acUnit'
        label={t('upload_a_picture_of_nameplate_of_the_unit_indoor_outdoor_unit')}
        title={t('media_upload')}
        description={t('add_your_media_here_we_only_support_jpg_and_png_files')}
        inputLabel={t('upload_image_for_ac')}
        acceptedFile={acceptedFileImage}
        maxFiles={10}
      />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default UploadForm
