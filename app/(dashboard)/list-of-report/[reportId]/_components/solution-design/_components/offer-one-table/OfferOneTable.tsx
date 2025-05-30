import { useTranslations } from 'next-intl'
import React from 'react'

import { useOfferOneTable } from './offer-one-table.hook'
import OfferTable from '../offer-table/OfferTable'

const OfferOneTable = () => {
  const t = useTranslations('report')

  const { data, columns } = useOfferOneTable()

  return <OfferTable title={t('offer_one')} data={data} columns={columns} />
}

export default OfferOneTable
