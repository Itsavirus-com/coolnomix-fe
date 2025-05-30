import { useTranslations } from 'next-intl'
import React from 'react'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { cn } from '@/libs/utils'

import { useSystemHealth } from './system-health.hook'

const SystemHealth = () => {
  const t = useTranslations('report')

  const { score, scoreColor } = useSystemHealth()

  return (
    <div className='bg-pure-white flex items-center justify-between gap-2 rounded-xl p-5'>
      <div className='flex items-center gap-2'>
        <Icon icon='icon-health' size={20} className={scoreColor.color} />
        <Text variant='subtitle2' weight='bold'>
          {t('system_health')}
        </Text>
      </div>
      <div className='flex items-center gap-6'>
        <div className={cn('flex items-center rounded-sm px-[26px] py-1.5', scoreColor.background)}>
          <Text tag='span' variant='subtitle2' weight='bold' className='text-pure-white'>
            {score}%
          </Text>
        </div>
        <Text className='text-grey-darkest w-[405px] italic'>
          {t('currently_infrastructure_is_performing_well_with_no_critical_issues_detected')}
        </Text>
      </div>
    </div>
  )
}

export default SystemHealth
