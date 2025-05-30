import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'
import MediaInputPreview from '@/components/media-input-preview/MediaInputPreview'

import { DetailsReviewFormProps } from '../../details-forms.types'

const BrandForm: FC<DetailsReviewFormProps> = (props) => {
  const t = useTranslations('qna')

  const { index, formName, disabled } = props

  return (
    <div className='mt-4 flex flex-col gap-4'>
      {disabled && (
        <MediaInputPreview
          name={`${formName}.${index}.acUnit`}
          label={t('nameplate_of_the_unit')}
        />
      )}
      <ControlledInput
        required
        name={`${formName}.${index}.brandEquipment`}
        label={t('what_is_the_brand_of_the_equipment')}
        hint=''
        index={index}
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.modelEquipment`}
        label={t('what_is_the_model_of_the_equipment')}
        hint=''
        index={index}
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.serialNumber`}
        label={t('what_is_the_serial_number_of_the_equipment')}
        hint=''
        index={index}
        disabled={disabled}
      />
      <ControlledSelect
        required
        name={`${formName}.${index}.acType`}
        label={t('what_is_the_type_of_air_conditioning_system')}
        items={[
          { label: t('inverter'), value: 'inverter' },
          { label: t('non_inverter'), value: 'non-inverter' }
        ]}
        placeholder={t('select_air_conditioning_type')}
        index={index}
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.numberOfSameType`}
        label={t('number_of_same_type_air_conditioning')}
        type='number'
        index={index}
        disabled={disabled}
        placeholder={t('e_g_3_units')}
      />
    </div>
  )
}

export default BrandForm
