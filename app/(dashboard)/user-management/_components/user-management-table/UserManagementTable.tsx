'use client'

import React, { Suspense } from 'react'

import Table from '@/components/table/table'

import { useUserManagementTable } from './user-management-table.hook'

const UserManagementTable = () => {
  const { data, columns } = useUserManagementTable()

  return (
    <Suspense>
      <Table
        data={data}
        columns={columns}
        classNames={{
          container: 'border-none'
        }}
      />
    </Suspense>
  )
}

export default UserManagementTable
