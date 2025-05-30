import { useTranslations } from 'next-intl'
import React from 'react'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { Card, CardContent } from '@/components/ui/card'

const RegularMaintenanceInfo = () => {
  const t = useTranslations('report')

  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-4'>
          <div>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#D9D9D9]'>
              <Icon icon='icon-info-circle' size={14} className='text-pure-black' />
            </div>
          </div>
          <Text className='w-[90%] leading-[130%] text-black italic'>
            {t(
              'to_ensue_optimal_performance_and_energy_savings_from_the_coolnomix_system_regular_maintenance_is_essential'
            )}
          </Text>
        </div>
      </CardContent>
    </Card>
  )
}

export default RegularMaintenanceInfo
