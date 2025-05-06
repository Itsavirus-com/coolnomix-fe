'use client'

import React from 'react'

import { SelectAcRequestCardType } from '@/_components/select-ac-request-cards/select-ac-request-cards.types'
import SelectAcRequestCards from '@/_components/select-ac-request-cards/SelectAcRequestCards'
import { acRequest1, acRequest2, acRequest3 } from '@/assets/images'
import Description from '@/components/description/Description'
import { getTranslate } from '@/locales/i18n'

const t = getTranslate('qna')

const items: SelectAcRequestCardType[] = [
  {
    image: acRequest1,
    title: t('asset_list'),
    description: t('upload_your_ac_asset_list_for_faster_processing'),
    type: 'asset-list'
  },
  {
    image: acRequest2,
    title: t('details_forms'),
    description: t('fill_out_the_form_based_on_your_air_conditioner'),
    type: 'details-forms'
  },
  {
    image: acRequest3,
    title: t('technician_visit'),
    description: t('technician_will_visit_to_assess_your_ac_needs'),
    type: 'tech-visit'
  }
]

const SelectAcRequest = () => {
  return (
    <main>
      <section className='content-placement-center'>
        <div className='flex w-[624px] flex-col'>
          <Description label={t('air_conditioning_request_process')} className='mb-6' titleTag='h1'>
            {t('choose_an_option_below_to_proceed_with_your_air_conditioning_request')}
          </Description>
          <SelectAcRequestCards items={items} />
        </div>
      </section>
    </main>
  )
}

export default SelectAcRequest
