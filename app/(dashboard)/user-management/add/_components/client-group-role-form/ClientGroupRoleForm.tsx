import React, { FC } from 'react'

import { AddUserFormProps } from '../add-user-form/add-user-form.types'
import ClientBranchForm from './_components/client-branch-form/ClientBranchForm'
import InternalTechnicianForm from './_components/internal-technician-form/InternalTechnician'

const ClientGroupRoleForm: FC<AddUserFormProps> = (props) => {
  const { isShow } = props

  if (!isShow) return null

  return (
    <div className='mt-8'>
      <ClientBranchForm />
      <InternalTechnicianForm />
    </div>
  )
}

export default ClientGroupRoleForm
