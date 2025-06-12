import { useTranslations } from 'next-intl'
import React from 'react'

import Accordion from '@/components/accordion/Accordion'
import Button from '@/components/button/Button'
import ControlledInput from '@/components/forms/input/Input'
import Icon from '@/components/icon/Icon'

import { useClientBranchForm } from './client-branch-form.hook'

const ClientBranchForm = () => {
  const t = useTranslations('user_management')

  const { fields, handleAdd } = useClientBranchForm()

  return (
    <div className='mb-8'>
      <Accordion
        type='multiple'
        defaultValue={['0']}
        items={fields.map((_, index) => ({
          key: index.toString(),
          title: t('client_branch_title', { index: index + 1 }),
          content: (
            <div className='flex flex-col gap-4'>
              <ControlledInput
                required
                name={`client_branch.${index}.email`}
                label={t('email_address')}
              />
              <ControlledInput required name={`client_branch.${index}.name`} label={t('name')} />
            </div>
          )
        }))}
      />
      <div className='mx-auto flex max-w-[320px] flex-col items-center gap-2.5'>
        <Button
          variant='ghost'
          size='lgAlt'
          startContent={<Icon icon='icon-plus' size={14} className='text-brand-dark' />}
          label={t('add_another_client_branch')}
          onClick={handleAdd}
        />
      </div>
    </div>
  )
}

export default ClientBranchForm
