import { FC } from 'react'

import { cn } from '@/libs/utils'

import { useProgress } from './progress.hook'
import { ProgressProps } from './progress.types'
import { TabsList, TabsTrigger } from '../ui/tabs'

const Progress: FC<ProgressProps> = (props) => {
  const { currentStepName, className, steps, ...rest } = props

  const { safeCurrentStep, percentage, safeTotalSteps } = useProgress(steps, currentStepName)

  return (
    <div
      role='progressbar'
      className={cn('flex w-fit items-center gap-[18px]', className)}
      aria-valuenow={safeCurrentStep}
      aria-valuemin={1}
      aria-valuemax={safeTotalSteps}
      aria-label={`Step ${safeCurrentStep} of ${safeTotalSteps}`}
      {...rest}
    >
      <div className='text-grey-darkest text-smAlt tabular-nums'>
        {safeCurrentStep}/{safeTotalSteps}
      </div>
      <TabsList className='h-fit w-fit gap-1 bg-transparent p-0'>
        {steps.map((step, index) => (
          <TabsTrigger
            disabled={index + 1 > safeCurrentStep}
            key={index}
            value={step}
            className={cn('tab-progress', {
              '!bg-brand-dark': index + 1 <= safeCurrentStep,
              'pointer-events-none': index + 1 <= safeCurrentStep
            })}
          />
        ))}
      </TabsList>
      <div className='text-grey-darkest text-smAlt tabular-nums'>{percentage}%</div>
    </div>
  )
}

export default Progress
