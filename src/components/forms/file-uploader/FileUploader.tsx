import type { FC } from 'react'

import { useTranslations } from 'next-intl'
import React from 'react'
import Dropzone from 'react-dropzone'

import Button from '@/components/button/Button'
import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'

import { handleFileUploadError } from './file-uploader.helpers'
import useFileUploader from './file-uploader.hook'

import type { FileUploaderProps } from './file-uploader.types'

// 2 MB
const MAX_FILE_SIZE = 2 * 1024 * 1024

const FileUploader: FC<FileUploaderProps> = (props) => {
  const t = useTranslations('common')

  const {
    inputLabel = t('upload_image_for_ac'),
    showPreview = true,
    maxFiles = 1,
    multiSelect = maxFiles > 1,
    acceptedFile,
    isInvalid,
    disabled,
    name,
    value,
    uploadFileLabel = t('upload_another_image'),
    onFileUpload
  } = props

  const { handleAcceptedFiles, removeFile } = useFileUploader(
    showPreview,
    multiSelect,
    value,
    onFileUpload,
    maxFiles
  )

  return (
    <div className='flex flex-col gap-1.5'>
      {!value?.length && (
        <Dropzone
          multiple={multiSelect}
          maxFiles={multiSelect ? maxFiles : 0}
          accept={acceptedFile}
          onDrop={(acceptedFiles) => {
            handleAcceptedFiles(acceptedFiles)
          }}
          maxSize={MAX_FILE_SIZE}
          onDropRejected={handleFileUploadError}
          disabled={disabled}
        >
          {({ getRootProps, getInputProps }) => {
            return (
              <div
                className={`${isInvalid ? 'dropzone !border-color-error' : 'dropzone'}`}
                data-test-id={name}
                {...getRootProps()}
              >
                <div className='dz-message'>
                  <input {...getInputProps()} />
                  <div className='text-smAlt flex w-full justify-between'>
                    <Text tag='span' className='text-grey-darkest'>
                      {inputLabel}
                    </Text>
                    <Icon icon='icon-backup' size={15} className='text-[#D9D9D980]' />
                  </div>
                </div>
              </div>
            )
          }}
        </Dropzone>
      )}
      {showPreview && value?.length > 0 && (
        <div className='flex flex-col gap-1.5'>
          {value.map((f) => (
            <div key={f?.preview} className='dropzone dropzone-previews'>
              <div className='dz-message'>
                <div className='flex w-full flex-row items-center justify-between'>
                  <Text tag='span' className='text-grey-darkest'>
                    {f?.name}
                  </Text>
                  <div className='flex items-center gap-2'>
                    <div
                      role='button'
                      className='hover:bg-grey-light flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-colors'
                      onClick={() => removeFile(value, f)}
                    >
                      <Icon icon='icon-close' size={10} className='text-grey-darkest' />
                    </div>
                    <div className='flex h-6 w-6 items-center justify-center'>
                      <Icon icon='icon-backup' size={15} className='text-grey-darkest' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!!value?.length && maxFiles > 1 && (
        <Dropzone
          multiple={multiSelect}
          maxFiles={multiSelect ? maxFiles : 0}
          accept={acceptedFile}
          onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
          maxSize={MAX_FILE_SIZE}
          onDropRejected={handleFileUploadError}
          disabled={disabled}
        >
          {({ getRootProps, getInputProps }) => {
            return (
              <div
                className={`dropzone dropzone-upload ${isInvalid ? '!border-color-error' : ''}`}
                data-test-id={name}
                {...getRootProps()}
              >
                <div className='dz-message w-full'>
                  <input {...getInputProps()} />
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-brand-dark hover:text-brand-dark w-full'
                    label={
                      <div className='flex flex-row items-center justify-center gap-1'>
                        <Icon icon='icon-plus' size={14} className='text-brand-dark' />
                        {uploadFileLabel}
                      </div>
                    }
                  />
                </div>
              </div>
            )
          }}
        </Dropzone>
      )}
    </div>
  )
}

export default FileUploader
