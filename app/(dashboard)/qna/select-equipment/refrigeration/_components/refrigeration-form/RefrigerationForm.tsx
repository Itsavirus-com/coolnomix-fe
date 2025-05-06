import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import ControlledInput from '@/components/forms/input/Input'
import ControlledSelect from '@/components/forms/select/Select'

import { RefrigerationFormProps } from './refrigeration-form.types'

const AcForm: FC<RefrigerationFormProps> = (props) => {
  const { t } = useTranslation('qna')

  const { disabled } = props

  return (
    <div className='mt-4 grid grid-cols-2 flex-col gap-4'>
      <ControlledInput
        required
        name='evaporatorMake'
        label={t('evaporator_make')}
        placeholder={t('enter_evaporator_make_details')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='evaporatorModel'
        label={t('evaporator_model')}
        placeholder={t('enter_evaporator_model_details')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='evaporatorSerialNumber'
        label={t('evaporator_serial_number')}
        placeholder={t('enter_evaporator_serial_number')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='condenserMake'
        label={t('condenser_make')}
        placeholder={t('enter_condenser_make_details')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='condenserModel'
        label={t('condenser_model')}
        placeholder={t('enter_condenser_model_details')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='condenserSerialNumber'
        label={t('condenser_serial_number')}
        placeholder={t('enter_condenser_serial_number')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='compressorMake'
        label={t('compressor_make')}
        placeholder={t('enter_compressor_make_details')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='compressorModel'
        label={t('compressor_model')}
        placeholder={t('enter_compressor_model_details')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='tempSetPointCutIn'
        label={t('temp_set_point_c_cut_in')}
        placeholder={t('system_activation_cut_in')}
        disabled={disabled}
      />
      <ControlledInput
        required
        name='tempSetPointCutOut'
        label={t('temp_set_point_c_cut_out')}
        placeholder={t('deactivation_cut_out')}
        disabled={disabled}
      />
      <ControlledInput
        required
        name='differentialTempSetPoint'
        label={t('differential_temp_set_point_c')}
        placeholder={t('enter_the_temperature')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledSelect
        required
        name='systemAbilityToCycleOnOffBasedOnTempSetPoints'
        label={t('system_ability_to_cycle_on_off_based_on_temp_set_points')}
        items={[
          {
            label: t('yes'),
            value: 'yes'
          },
          {
            label: t('no'),
            value: 'no'
          }
        ]}
        placeholder={t('select')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledSelect
        required
        name='isTheDefrostSystemFunctioning'
        label={t('is_the_defrost_system_functioning')}
        items={[
          {
            label: t('yes'),
            value: 'yes'
          },
          {
            label: t('no'),
            value: 'no'
          }
        ]}
        placeholder={t('select')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledSelect
        required
        name='areTheTempMetersFunctioning'
        label={t('are_the_temp_meters_functioning')}
        items={[
          {
            label: t('yes'),
            value: 'yes'
          },
          {
            label: t('no'),
            value: 'no'
          }
        ]}
        placeholder={t('select')}
        className='col-span-2'
        disabled={disabled}
      />
      <ControlledInput
        required
        name='serviceFrequency'
        label={t('service_frequency')}
        placeholder={t('enter_the_frequency_of_system_maintenance_or_servicing')}
        className='col-span-2'
        disabled={disabled}
      />
    </div>
  )
}

export default AcForm
