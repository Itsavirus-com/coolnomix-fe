import { FileType, FileWithPreview } from '@/types/general'

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const convertToBase64 = (file: File | string): Promise<string> => {
  if (typeof file === 'string') {
    return Promise.resolve(file)
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

export const convertFilesToBase64 = async (files: FileType[]): Promise<string[]> => {
  const base64Promises = files.map(async (file) => {
    if (typeof file === 'string') {
      return file
    }

    const base64 = await convertToBase64(file)
    return base64
  })

  return Promise.all(base64Promises)
}

export const dataUrlToFile = (dataUrl: string, filename: string): FileWithPreview | null => {
  try {
    const arr = dataUrl.split(',')
    if (arr.length < 2) {
      console.warn('Invalid data URL format')
      return null
    }

    const mimeArr = arr[0].match(/:(.*?);/)
    if (!mimeArr || mimeArr.length < 2) {
      console.warn('Invalid MIME type in data URL')
      return null
    }

    const mime = mimeArr[1]
    const buff = Buffer.from(arr[1], 'base64')

    return new File([buff], filename, { type: mime }) as FileWithPreview
  } catch (error) {
    console.error('Error converting data URL to file:', error)
    return null
  }
}

export const dataUrlsToFiles = (dataUrls: string[]): FileWithPreview[] => {
  return dataUrls
    .map((dataUrl, index) => {
      const file = dataUrlToFile(dataUrl, `File ${index + 1}`)

      if (file) {
        Object.assign(file, {
          preview: file.type.split('/')[0] === 'image' ? dataUrl : null,
          formattedSize: formatBytes(file.size)
        })
      }
      return file
    })
    .filter((file): file is FileWithPreview => file !== null)
}
