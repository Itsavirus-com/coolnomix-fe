'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

import ButtonGroup from '@/components/button-group/ButtonGroup'
import Description from '@/components/description/Description'
import DateInput from '@/components/forms/date-input/DateInput'
import ControlledInput from '@/components/forms/input/Input'
import ControlledTextArea from '@/components/forms/text-area/TextArea'
import TimePicker from '@/components/forms/time-picker/TimePicker'
import { FormProvider } from '@/components/ui/form'

import { useTechVisit } from './tech-visit.hook'

const Page = () => {
  const { t } = useTranslation('qna')

  const { methods, buttons, handleShowModal } = useTechVisit()

  return (
    <section className='content-placement-center'>
      <div className='w-[578px]'>
        <Description label={t('need_help_hit_the_panic_button')} className='mb-8' titleTag='h1'>
          {t('fill_in_the_necessary_details_about_your_air_conditioning_system')}
        </Description>
        <FormProvider methods={methods} onSubmit={handleShowModal}>
          <div className='grid grid-cols-2 gap-x-4 gap-y-5'>
            <DateInput
              required
              label={t('appointment_date')}
              inputLabel={t('pick_appointment_date')}
              name='appointmentDate'
            />
            <TimePicker
              required
              label={t('appointment_time')}
              inputLabel={t('pick_appointment_time')}
              name='appointmentTime'
              minuteStep={15}
            />
            <ControlledInput
              label={t('location')}
              name='location'
              placeholder='e.g., 123 Sunset Road, Kuta'
              className='col-span-2'
            />
            <ControlledTextArea
              name='additionalNotes'
              label={t('additional_notes')}
              placeholder={t('add_any_extra_information_or_context_here')}
              className='col-span-2'
            />
          </div>
          <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
        </FormProvider>
      </div>
    </section>
  )
}

export default Page
