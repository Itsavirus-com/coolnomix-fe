export const getFileName = (value: any) => {
  if (!value) return ''

  if (Array.isArray(value)) {
    return value[0]?.path.split('/').pop()?.split('.')[0]
  }

  return value?.path.split('/').pop()?.split('.')[0]
}

export const getFileImage = (value: any) => {
  if (!value) return ''

  if (Array.isArray(value)) {
    return value[0]?.preview
  }

  return value?.preview
}
