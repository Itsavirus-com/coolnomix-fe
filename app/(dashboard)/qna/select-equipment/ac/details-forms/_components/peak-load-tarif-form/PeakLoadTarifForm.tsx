import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ControlledInput from '@/components/forms/input/Input'

import { DetailsReviewFormProps } from '../../details-forms.types'

const PeakLoadTarifForm: FC<DetailsReviewFormProps> = (props) => {
  const t = useTranslations('qna')

  const { index, formName, disabled } = props

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <ControlledInput
        required
        name={`${formName}.${index}.peakLoadTarif`}
        label={t('peak_load_tariff_rate_idr')}
        index={index}
        disabled={disabled}
        placeholder='Eg., 1.700 IDR'
      />
      <ControlledInput
        required
        name={`${formName}.${index}.noPeakLoadTarif`}
        label={t('no_peak_load_tariff_rate_idr')}
        index={index}
        disabled={disabled}
        placeholder='Eg., 1.200 IDR'
      />
    </div>
  )
}

export default PeakLoadTarifForm
