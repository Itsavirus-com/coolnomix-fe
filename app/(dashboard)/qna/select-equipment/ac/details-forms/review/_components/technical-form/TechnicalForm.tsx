import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import { ControlledFileUploader } from '@/components/forms'
import DateInput from '@/components/forms/date-input/DateInput'
import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'
import MediaInputPreview from '@/components/media-input-preview/MediaInputPreview'
import { acceptedFileImage } from '@/config/constant'

import { DetailsReviewFormProps } from '../../../details-forms.types'

const yearsOptions = Array.from({ length: 20 }, (_, i) => {
  const year = new Date().getFullYear() - i
  return {
    label: year.toString(),
    value: year.toString()
  }
})

const TechnicalForm: FC<DetailsReviewFormProps> = (props) => {
  const t = useTranslations('qna')

  const { index, formName, disabled } = props

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <ControlledSelect
        required
        name={`${formName}.${index}.yearOfInstallation`}
        label={t('when_was_the_equipment_installed')}
        items={yearsOptions}
        placeholder={t('enter_year_of_installation')}
        index={index}
        disabled={disabled}
        hasSearch
      />
      <ControlledSelect
        required
        name={`${formName}.${index}.serviceFrequency`}
        label={t('how_often_do_you_maintain_your_equipment')}
        items={[
          { label: t('every_month'), value: 'every_month' },
          { label: t('every_two_month'), value: 'every_two_month' },
          { label: t('every_three_month'), value: 'every_three_month' }
        ]}
        placeholder={t('select_service_frequency')}
        index={index}
        disabled={disabled}
      />
      <DateInput
        required
        label={t('last_service_date')}
        inputLabel={t('pick_the_last_service_date')}
        name={`${formName}.${index}.lastServiceDate`}
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.roomTemperature`}
        label={t('existing_room_temperature_c')}
        index={index}
        type='number'
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.onCoilAirTemprature`}
        label={t('on_coil_air_temperature_c')}
        index={index}
        type='number'
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.offCoilAirTemprature`}
        label={t('off_coil_air_temperature_c')}
        index={index}
        type='number'
        disabled={disabled}
      />
      <ControlledSelect
        required
        name={`${formName}.${index}.wifiAvailable`}
        label={t('is_there_wifi_available_at_the_electrical_room_area')}
        items={[
          { label: t('yes'), value: 'yes' },
          { label: t('no'), value: 'no' }
        ]}
        placeholder={t('select_wifi_available')}
        index={index}
        disabled={disabled}
      />
      {disabled ? (
        <MediaInputPreview
          name={`${formName}.${index}.filterCondition`}
          label={t('filter_condition')}
        />
      ) : (
        <ControlledFileUploader
          name={`${formName}.${index}.filterCondition`}
          label={t('upload_a_picture_of_nameplate_of_the_unit_indoor_outdoor_unit')}
          title={t('media_upload')}
          description={t('add_your_media_here_we_only_support_jpg_and_png_files')}
          inputLabel={t('upload_filter_condition')}
          acceptedFile={acceptedFileImage}
          hint=''
          disabled={disabled}
        />
      )}
    </div>
  )
}

export default TechnicalForm
