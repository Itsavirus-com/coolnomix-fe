import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import { useMediaInputPreview } from './media-input-preview.hook'
import { MediaInputPreviewProps } from './media-input-preview.types'
import Icon from '../icon/Icon'
import Image from '../image/Image'
import Text from '../text/Text'
import { FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const MediaInputPreview: FC<MediaInputPreviewProps> = (props) => {
  const { name, label, labelClassname, required, hint, ...rest } = props

  const t = useTranslations('common')

  const { file, field } = useMediaInputPreview(name)

  if (!file) return null

  return (
    <FormItem {...rest}>
      <FormLabel name={name} id={name} className={labelClassname}>
        {label}
        {hint && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon icon='icon-info-circle' size={14} className='text-brand-muted' />
            </TooltipTrigger>
            <TooltipContent>
              <Text tag='span' className='text-grey-darkest'>
                {hint}
              </Text>
            </TooltipContent>
          </Tooltip>
        )}
        {required && <span className='text-destructive'>*</span>}
      </FormLabel>
      <div className='relative'>
        <div className='absolute top-1/2 left-4 z-10 h-6 w-6 -translate-y-1/2 overflow-hidden rounded-lg bg-white'>
          <Image
            src={file?.preview}
            alt={t('an_awesome_media_input_preview_image')}
            height={24}
            width={24}
            quality={30}
          />
        </div>
        <Input disabled {...field} value={file?.name} className='pl-12' />
      </div>
    </FormItem>
  )
}

export default MediaInputPreview
