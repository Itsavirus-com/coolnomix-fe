import React, { FC } from 'react'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/libs/utils'

import { useFormSidebar } from './form-sidebar.hook'
import { FormSidebarProps } from './form-sidebar.types'

const FormSidebar: FC<FormSidebarProps> = (props) => {
  const { title, description, tabs, onChangeTab, ...rest } = props

  const { currentTab } = useFormSidebar(tabs)

  return (
    <div className='h-fit sm:w-[237px]' {...rest}>
      <Text variant='subtitle2' weight='semibold'>
        {title}
      </Text>
      <Text variant='body2' className='text-grey-darkest mt-2.5 pr-3'>
        {description}
      </Text>
      <div role='tab' className='mt-6 w-full'>
        <TabsList className='flex h-fit w-full flex-col gap-1 bg-transparent p-0'>
          {tabs.map((tab, index) => (
            <div key={index} className='w-full'>
              <TabsTrigger
                value={tab.value}
                className={cn('details-form-sidebar-tab', {
                  active: tab.value === currentTab || tab.active
                })}
                onClick={() => {
                  onChangeTab(tab.value)
                }}
              >
                <div className='flex items-center gap-2'>
                  <Icon icon={tab.icon} size={14} className='text-brand-dark' />
                  <Text tag='span' variant='body2' weight='semibold'>
                    {tab.label}
                  </Text>
                </div>
              </TabsTrigger>
              {tab?.children && (
                <div className='mt-0.5'>
                  {tab.children?.map((child, childIndex) => (
                    <TabsTrigger
                      key={childIndex}
                      value={child.value}
                      className={cn('details-form-sidebar-tab-child', {
                        active: child.value === currentTab
                      })}
                      onClick={() => {
                        onChangeTab(child.value)
                      }}
                    >
                      <Text tag='span' variant='body1' weight='normal'>
                        {child.label}
                      </Text>
                    </TabsTrigger>
                  ))}
                </div>
              )}
            </div>
          ))}
        </TabsList>
      </div>
    </div>
  )
}

export default FormSidebar
