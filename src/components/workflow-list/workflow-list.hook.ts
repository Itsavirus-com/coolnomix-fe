// Should be fetched from API
const workflowLists = [
  {
    id: 1,
    name: 'Pending',
    status: 'pending',
    qnaLists: [
      {
        name: 'Air Conditioning',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'air-conditioning',
        type: 'details-forms'
      },
      {
        name: 'Air Conditioning',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'air-conditioning',
        type: 'asset-list'
      },
      {
        name: 'Air Conditioning',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'air-conditioning',
        type: 'technician'
      }
    ]
  },
  {
    id: 1,
    name: 'Pending',
    status: 'in-review',
    qnaLists: [
      {
        name: 'Air Conditioning',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'air-conditioning',
        type: 'details-forms'
      },
      {
        name: 'Air Conditioning',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'air-conditioning',
        type: 'asset-list'
      },
      {
        name: 'Refrigeration',
        date: '7:18 AM, February 3, 2025',
        equipmentType: 'refrigeration',
        type: 'details-forms'
      }
    ]
  }
]

// const workflowListsReport = [
//   {
//     id: 1,
//     name: 'Pending',
//     status: 'in-review',
//     qnaLists: [
//       {
//         name: 'Air Conditioning Report',
//         date: '7:18 AM, February 3, 2025',
//         equipmentType: 'air-conditioning'
//       },
//       {
//         name: 'Refrigeration Report',
//         date: '7:18 AM, February 3, 2025',
//         equipmentType: 'refrigeration'
//       }
//     ]
//   }
// ]

export const useWorkflowList = () => {
  return {
    workflowLists
  }
}
