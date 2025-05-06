'use client'

import React from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import Description from '@/components/description/Description'
import ControlledSelect from '@/components/forms/select/Select'
import { FormProvider } from '@/components/ui/form'
import { getTranslate } from '@/locales/i18n'

import { useEquipment } from './equipment.hook'
import { EquipmentTypeItem } from './equipment.types'

const t = getTranslate('qna')

// Should be data from backend
const equipmentTypes: EquipmentTypeItem[] = [
  { label: t('air_conditioning'), value: 'air-conditioning' },
  { label: t('refrigeration'), value: 'refrigeration' }
]

const Page = () => {
  const { methods, buttons, onSubmit } = useEquipment()

  return (
    <main>
      <section className='content-placement-center'>
        <div className='w-[578px]'>
          <Description label={t('select_equipment_type')} className='mb-8' titleTag='h1'>
            {t('select_equipment_type_description')}
          </Description>
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
        </div>
      </section>
    </main>
  )
}

export default Page
