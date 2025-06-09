import React from 'react'

import PageHeaderHandler from '@/handlers/page-header-handler/PageHeaderHandler'

import UserManagementHeader from './_components/user-management-header/UserManagementHeader'
import UserManagementTable from './_components/user-management-table/UserManagementTable'

const Page = () => {
  return (
    <main className='pt-4'>
      <PageHeaderHandler icon='icon-people-behind' title='user_management' />
      <section>
        <UserManagementHeader />
        <UserManagementTable />
      </section>
    </main>
  )
}

export default Page
