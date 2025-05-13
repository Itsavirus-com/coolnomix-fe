import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'

import { DetailsReviewFormProps } from '../../details-forms.types'

const BrandForm: FC<DetailsReviewFormProps> = (props) => {
  const t = useTranslations('qna')

  const { index, formName, disabled } = props

  return (
    <div className='mt-4 flex flex-col gap-4'>
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
          { label: t('indoor'), value: 'indoor' },
          { label: t('outdoor'), value: 'outdoor' }
        ]}
        placeholder={t('select_air_conditioning_type')}
        index={index}
        disabled={disabled}
      />
    </div>
  )
}

export default BrandForm
