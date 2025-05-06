import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Text from '@/components/text/Text'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/libs/utils'

import { formatValue } from './file-uploader.helpers'
import FileUploader from './FileUploader'

import type { ControlledFileUploaderProps } from './file-uploader.types'

export const ControlledFileUploader = (props: ControlledFileUploaderProps) => {
  const { t } = useTranslation('common')

  const {
    label,
    inputLabel,
    name,
    maxFiles = 1,
    title = t('media_upload'),
    description = t('media_upload_hint', { maxFiles }),
    className,
    required,
    ...rest
  } = props

  const { control } = useFormContext()

  return (
    <FormItem>
      <div className={cn('flex flex-col', className)}>
        {label && (
          <FormLabel name={name} id={name}>
            {label}
          </FormLabel>
        )}
        <div className='border-color-20 bg-grey-lightest rounded-md border-1 px-5 py-3.5'>
          <div className='mb-4'>
            <div className='flex items-center gap-1'>
              <Text tag='span' weight='medium' className='mb-1'>
                {title}
              </Text>
              {required && <span className='text-destructive'>*</span>}
            </div>
            <Text tag='span' className='text-grey-darkest'>
              {description}
            </Text>
          </div>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { invalid } }) => (
              <FileUploader
                inputLabel={inputLabel}
                onFileUpload={onChange}
                isInvalid={invalid}
                value={formatValue(value)}
                name={name}
                maxFiles={maxFiles}
                {...rest}
              />
            )}
          />
        </div>
      </div>
      <FormMessage name={name} />
    </FormItem>
  )
}
