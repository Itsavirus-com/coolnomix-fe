import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'
import TimePicker from '@/components/forms/time-picker/TimePicker'

import { DetailsReviewFormProps } from '../../details-forms.types'

const AC_RATIO_OPTIONS = [
  { label: '1:1', value: '1:1' },
  { label: '1:2', value: '1:2' },
  { label: '1:3', value: '1:3' },
  { label: '1:4', value: '1:4' },
  { label: '1:5', value: '1:5' },
  { label: '1:6', value: '1:6' },
  { label: '1:7', value: '1:7' },
  { label: '1:8', value: '1:8' },
  { label: '1:9', value: '1:9' },
  { label: '1:10', value: '1:10' }
]

const AcForm: FC<DetailsReviewFormProps> = (props) => {
  const t = useTranslations('qna')

  const { index, formName, disabled } = props

  return (
    <div className='mt-4 grid grid-cols-2 flex-col gap-4'>
      <ControlledInput
        required
        name={`${formName}.${index}.operatingHoursPerDay`}
        label={t('air_conditioner_operating_hours_per_day')}
        type='number'
        placeholder={t('enter_operating_hours_per_day')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.runningDaysPerWeek`}
        label={t('number_of_days_per_week_is_the_ac_running')}
        type='number'
        placeholder={t('enter_number_of_days_per_week')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
      <TimePicker
        required
        label={t('peak_load_hours_start_time')}
        inputLabel='e.g. 8:00 AM'
        name={`${formName}.${index}.peekLoadHoursStartTime`}
        minuteStep={15}
        index={index}
        disabled={disabled}
      />
      <TimePicker
        required
        label={t('peak_load_hours_end_time')}
        inputLabel='e.g. 10:00 PM'
        name={`${formName}.${index}.peekLoadHoursEndTime`}
        minuteStep={15}
        index={index}
        disabled={disabled}
      />
      <ControlledInput
        name={`${formName}.${index}.btuPerHour`}
        label={t('btu_per_hour')}
        type='number'
        placeholder={t('enter_btu_value_per_hour')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.inputPower`}
        label={t('input_power')}
        type='number'
        placeholder={t('enter_input_power')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledSelect
        required
        name={`${formName}.${index}.ratioOutsideToInside`}
        label={t('ratio_of_outside_units_to_inside_units')}
        items={AC_RATIO_OPTIONS}
        placeholder={t('select_ratio')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
    </div>
  )
}

export default AcForm
