'use client'

import React from 'react'

import Table from '@/components/table/table'

import { useUserManagementTable } from './user-management-table.hook'

const UserManagementTable = () => {
  const { data, columns } = useUserManagementTable()

  return (
    <Table
      data={data}
      columns={columns}
      classNames={{
        container: 'border-none'
      }}
    />
  )
}

export default UserManagementTable
