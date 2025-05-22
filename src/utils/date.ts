import dayjs from 'dayjs'

export const getTime = (isoDate: string) => {
  return dayjs(isoDate).format('HH:mm')
}

export const getDate = (isoDate: string) => {
  return dayjs(isoDate).format('YYYY-MM-DD')
}
