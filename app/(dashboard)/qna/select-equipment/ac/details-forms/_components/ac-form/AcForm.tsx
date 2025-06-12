import { useTranslations } from 'next-intl'
import React, { FC, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'
import { SelectItem } from '@/components/forms/select/select.types'
import TimePicker from '@/components/forms/time-picker/TimePicker'

import { DetailsReviewFormProps } from '../../details-forms.types'

const AcForm: FC<DetailsReviewFormProps> = (props) => {
  const t = useTranslations('qna')

  const { index, formName, disabled } = props

  const acRatioOptions = useMemo((): SelectItem[] => {
    return Array.from({ length: 10 }, (_, i) => ({
      label: `${t('internal_unit', { ratio: 1 })} : ${t('external_unit', { ratio: i + 1 })}`,
      value: `${i + 1}:${i + 1}`
    }))
  }, [])

  const { getValues } = useFormContext()

  const shouldShowBtuPerHour =
    !disabled || (disabled && !!getValues(`${formName}.${index}.hourly_btu`))

  return (
    <div className='mt-4 grid grid-cols-2 flex-col gap-4'>
      <ControlledInput
        required
        name={`${formName}.${index}.daily_operating_hours`}
        label={t('air_conditioner_operating_hours_per_day')}
        type='number'
        placeholder={t('enter_operating_hours_per_day')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name={`${formName}.${index}.days_operating_per_week`}
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
        name={`${formName}.${index}.peak_hours_start`}
        minuteStep={15}
        index={index}
        disabled={disabled}
      />
      <TimePicker
        required
        label={t('peak_load_hours_end_time')}
        inputLabel='e.g. 10:00 PM'
        name={`${formName}.${index}.peak_hours_end`}
        minuteStep={15}
        index={index}
        disabled={disabled}
      />
      {shouldShowBtuPerHour && (
        <ControlledInput
          name={`${formName}.${index}.hourly_btu`}
          label={t('btu_per_hour')}
          type='number'
          placeholder={t('enter_btu_value_per_hour')}
          index={index}
          className='col-span-2'
          disabled={disabled}
        />
      )}
      <ControlledInput
        required
        name={`${formName}.${index}.input_power_kw`}
        label={t('input_power')}
        type='number'
        placeholder={t('enter_input_power')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledSelect
        required
        name={`${formName}.${index}.ratio`}
        label={t('ratio_of_outside_units_to_inside_units')}
        items={acRatioOptions}
        placeholder={t('select_ratio')}
        index={index}
        className='col-span-2'
        disabled={disabled}
      />
    </div>
  )
}

export default AcForm
