import { getTranslations } from 'next-intl/server'
import React from 'react'

import Description from '@/components/description/Description'
import PageHeaderHandler from '@/handlers/page-header-handler/PageHeaderHandler'

import AddUserForm from './_components/add-user-form/AddUserForm'

const Page = async () => {
  const t = await getTranslations('user_management')

  return (
    <main className='content-placement-center content-placement-center--start'>
      <PageHeaderHandler icon='icon-people-behind' title='manage_administrators' />
      <section>
        <div className='w-[578px]'>
          <Description label={t('account_details')} titleTag='h1'>
            {t('enter_the_necessary_information')}
          </Description>
          <AddUserForm />
        </div>
      </section>
    </main>
  )
}

export default Page
