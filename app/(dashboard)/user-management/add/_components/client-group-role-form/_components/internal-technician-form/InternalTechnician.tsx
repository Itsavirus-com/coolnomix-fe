import { useTranslations } from 'next-intl'
import React from 'react'

import Accordion from '@/components/accordion/Accordion'
import Button from '@/components/button/Button'
import ControlledSelect from '@/components/forms/select/Select'
import Icon from '@/components/icon/Icon'

import { useInternalTechnicianForm } from './client-branch-form.hook'

const InternalTechnicianForm = () => {
  const t = useTranslations('user_management')

  const { fields, techniciansOptions, handleAdd } = useInternalTechnicianForm()

  return (
    <div>
      <Accordion
        type='multiple'
        defaultValue={['0']}
        items={fields.map((_, index) => ({
          key: index.toString(),
          title: t('internal_technician_title', { index: index + 1 }),
          content: (
            <ControlledSelect
              required
              name={`internal_technician.${index}.name`}
              label={t('name')}
              items={techniciansOptions}
              placeholder={t('select_internal_technician')}
            />
          )
        }))}
      />
      <div className='mx-auto flex max-w-[320px] flex-col items-center gap-2.5'>
        <Button
          variant='ghost'
          size='lgAlt'
          startContent={<Icon icon='icon-plus' size={14} className='text-brand-dark' />}
          label={t('add_another_internal_technician')}
          onClick={handleAdd}
        />
      </div>
    </div>
  )
}

export default InternalTechnicianForm
