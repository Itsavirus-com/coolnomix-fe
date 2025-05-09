'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import ControlledSelect from '@/components/forms/select/Select'
import { FormProvider } from '@/components/ui/form'

import { useSelectEquipmentForm } from './select-equipment-form.hook'

const SelectEquipmentForm = () => {
  const t = useTranslations('qna')

  const { equipmentTypes, buttons, methods, onSubmit } = useSelectEquipmentForm()

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <ControlledSelect
        required
        name='selectEquipmentType'
        label={t('choose_equipment')}
        placeholder={t('select_the_type_of_equipment_you_want_to_proceed_with')}
        items={equipmentTypes}
      />
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default SelectEquipmentForm
