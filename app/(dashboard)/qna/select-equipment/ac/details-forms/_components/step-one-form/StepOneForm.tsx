'use client'

import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import Accordion from '@/components/accordion/Accordion'
import Button from '@/components/button/Button'
import ButtonGroup from '@/components/button-group/ButtonGroup'
import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { FormProvider } from '@/components/ui/form'

import { useStepOneForm } from './step-one-form.hook'
import { DetailsFormProps } from '../../details-forms.types'
import BrandForm from '../brand-form/BrandForm'

const StepOneForm: FC<DetailsFormProps> = (props) => {
  const { handleContinue } = props

  const t = useTranslations('qna')

  const { methods, fields, buttons, handleAdd, handleRemove, onSubmit } = useStepOneForm()

  return (
    <FormProvider
      methods={methods}
      onSubmit={(values) => {
        onSubmit(values)
        handleContinue?.()
      }}
    >
      <Accordion
        type='multiple'
        handleRemove={handleRemove}
        defaultValue={['0', '1']}
        items={fields.map((_, index) => ({
          key: index.toString(),
          title: t('air_conditioning_title', { index: index + 1 }),
          content: <BrandForm index={index} formName='details_brand' />
        }))}
      />
      <div className='mx-auto mt-10 flex max-w-[320px] flex-col items-center gap-2.5'>
        <Text
          variant='body1'
          weight='medium'
          className='text-grey-darkest text-center leading-[120%] italic'
        >
          {t('if_you_have_another_air_conditioner_with')}
        </Text>
        <Button
          variant='ghost-alt'
          size='lgAlt'
          label={
            <div className='flex items-center gap-2'>
              <Icon icon='icon-plus' size={14} className='text-brand-dark' />
              {t('add_another_air_conditioner')}
            </div>
          }
          onClick={handleAdd}
        />
      </div>
      <ButtonGroup className='mt-14 justify-end' buttons={buttons} />
    </FormProvider>
  )
}

export default StepOneForm
