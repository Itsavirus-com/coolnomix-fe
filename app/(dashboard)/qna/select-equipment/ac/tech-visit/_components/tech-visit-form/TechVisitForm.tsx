'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import DateInput from '@/components/forms/date-input/DateInput'
import ControlledInput from '@/components/forms/input/Input'
import ControlledTextArea from '@/components/forms/text-area/TextArea'
import TimePicker from '@/components/forms/time-picker/TimePicker'
import { FormProvider } from '@/components/ui/form'

import { useTechVisitForm } from './tech-visit.hook'
import { TechVisitFormProps } from './tech-visit.types'

const TechVisitForm: FC<TechVisitFormProps> = (props) => {
  const { inPreview } = props

  const t = useTranslations('qna')

  const { methods, buttons, handleShowModal } = useTechVisitForm(inPreview)

  return (
    <FormProvider methods={methods} onSubmit={handleShowModal}>
      <div className='grid grid-cols-2 gap-x-4 gap-y-5'>
        <DateInput
          required
          label={t('appointment_date')}
          inputLabel={t('pick_appointment_date')}
          name='appointmentDate'
          disabled={inPreview}
          minDate={new Date()}
        />
        <TimePicker
          required
          label={t('appointment_time')}
          inputLabel={t('pick_appointment_time')}
          name='appointmentTime'
          minuteStep={15}
          disabled={inPreview}
        />
        <ControlledInput
          required
          label={t('location')}
          name='location'
          placeholder='e.g., 123 Sunset Road, Kuta'
          className='col-span-2'
          disabled={inPreview}
        />
        <ControlledTextArea
          name='additionalNotes'
          label={t('additional_notes')}
          placeholder={t('add_any_extra_information_or_context_here')}
          className='col-span-2'
          disabled={inPreview}
        />
      </div>
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default TechVisitForm
