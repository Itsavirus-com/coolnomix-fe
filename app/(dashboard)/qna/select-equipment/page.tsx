import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

import Description from '@/components/description/Description'
import { ENV } from '@/libs/env'

import SelectEquipmentForm from './_components/select-equipment-form/SelectEquipmentForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Select equipment - ${ENV.NEXT_PUBLIC_PROJECT_NAME}`
  }
}

const Page = async () => {
  const t = await getTranslations('qna')

  return (
    <main>
      <section className='content-placement-center'>
        <div className='w-[578px]'>
          <Description label={t('select_equipment_type')} className='mb-8' titleTag='h1'>
            {t('select_equipment_type_description')}
          </Description>
          <SelectEquipmentForm />
        </div>
      </section>
    </main>
  )
}

export default Page
