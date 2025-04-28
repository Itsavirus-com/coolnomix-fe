import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Text from '@/components/text'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/libs/utils'

import FileUploader from './file-uploader'
import { formatValue } from './helpers'

import type { ControlledFileUploaderProps } from './file-uploader.types'

export const ControlledFileUploader = (props: ControlledFileUploaderProps) => {
  const { t } = useTranslation('common')

  const {
    label,
    name,
    maxFiles = 1,
    description = t('media_upload_hint', { maxFiles }),
    className,
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
        <div className='border-color-palette-greyLight rounded-md border-1 bg-[#F8F9FC] px-5 py-3.5'>
          <div className='mb-4'>
            <Text tag='span' className='mb-1'>
              {t('media_upload')}
            </Text>
            <Text tag='span' className='text-grey-darkest'>
              {description}
            </Text>
          </div>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { invalid } }) => (
              <FileUploader
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
