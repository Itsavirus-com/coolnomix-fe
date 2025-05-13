'use client'

import React from 'react'

import { useBranchLists } from './branch-lists.hook'
import BranchList from './BranchList'

const BranchLists = () => {
  const { branchLists } = useBranchLists()

  return (
    <div className='mt-4 flex flex-col gap-2.5'>
      {branchLists?.map((branch) => <BranchList key={branch.id.toString()} {...branch} />)}
    </div>
  )
}

export default BranchLists
