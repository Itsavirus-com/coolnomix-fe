'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Text from '@/components/text/Text'

import EstimatedSavingSharingsChart from './_components/estimated-saving-sharings-chart/EstimatedSavingSharingsChart'
import HardwareRequirementTable from './_components/hardware-requirement-table/HardwareRequirementTable'
import OfferOneTable from './_components/offer-one-table/OfferOneTable'
import OfferTwoTable from './_components/offer-two/OfferTwoTable'
import OwnRoiChart from './_components/own-roi-chart/OwnRoiChart'
import RegularMaintenanceInfo from './_components/regular-maintenance-info/RegularMaintenanceInfo'
import SavingShareTable from './_components/saving-share-table/SavingShareTable'
import TotalSavingPotentialTable from './_components/total-saving-potential-table/TotalSavingPotentialTable'

const SolutionDesign = () => {
  const t = useTranslations('report')

  return (
    <section className='bg-grey-lightest border-color-50 rounded-md border-1 p-6'>
      <Text variant='subtitle2' weight='bold' className='text-brand-dark mb-6 pl-5'>
        {t('solution_design')}
      </Text>
      <div className='mb-3 grid grid-cols-[460px_1fr] gap-3'>
        <HardwareRequirementTable />
        <TotalSavingPotentialTable />
        <div className='bg-pure-white border-color-50 grid grid-cols-[190px_1fr] gap-2.5 rounded-xl px-3 py-5'>
          <OfferOneTable />
          <SavingShareTable />
        </div>
        <EstimatedSavingSharingsChart />
      </div>
      <RegularMaintenanceInfo />
      <div className='mt-3 grid grid-cols-[460px_1fr] gap-3'>
        <OfferTwoTable />
        <OwnRoiChart />
      </div>
    </section>
  )
}

export default SolutionDesign
