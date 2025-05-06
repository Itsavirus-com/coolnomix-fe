import type { FC } from 'react'

import React from 'react'
import Dropzone from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'

import { handleFileUploadError } from './file-uploader.helpers'
import useFileUploader from './file-uploader.hook'

import type { FileUploaderProps } from './file-uploader.types'

// 10 MB
const MAX_FILE_SIZE = 2 * 1024 * 1024

const FileUploader: FC<FileUploaderProps> = (props) => {
  const { t } = useTranslation('common')

  const {
    inputLabel = t('upload_image_for_ac'),
    showPreview = true,
    maxFiles = 1,
    multiSelect = maxFiles > 1,
    acceptedFile,
    onFileUpload,
    isInvalid,
    name,
    value
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
          onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
          maxSize={MAX_FILE_SIZE}
          onDropRejected={handleFileUploadError}
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
                  <div className='text-smAlt flex justify-between'>
                    <Text tag='span' className='text-grey-darkest'>
                      {inputLabel}
                    </Text>
                    <Icon icon='icon-backup' className='text-color-[#D9D9D980]' />
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
            <div key={uuidv4()} className='dropzone dropzone-previews'>
              <div className='dz-message'>
                <div className='flex flex-row justify-between'>
                  <Text tag='span' className='text-grey-darkest'>
                    {f.name}
                  </Text>
                  <Icon
                    icon='icon-remove'
                    className='text-color-[#D9D9D980]'
                    onClick={() => removeFile(value, f)}
                  />
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
        >
          {({ getRootProps, getInputProps }) => {
            return (
              <div
                className={`${isInvalid ? 'dropzone dropzone-upload !border-color-error' : 'dropzone dropzone-upload'}`}
                data-test-id={name}
                {...getRootProps()}
              >
                <div className='dz-message m-auto'>
                  <input {...getInputProps()} />
                  <div className='flex flex-row items-center justify-center gap-1'>
                    <Icon icon='icon-backup' className='text-grey-darkest' />
                    <Text tag='span' className='text-grey-darkest'>
                      {t('upload_another_image')}
                    </Text>
                  </div>
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
