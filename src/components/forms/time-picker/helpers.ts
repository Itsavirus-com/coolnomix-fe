import { setHours, setMinutes } from 'date-fns'

export const calculateNewTime = (
  currentTime: Date | undefined,
  newValue: string,
  unit: 'hours' | 'minutes'
): Date => {
  const numericValue = parseInt(newValue, 10)

  if (isNaN(numericValue)) return currentTime || new Date()

  const baseDate = currentTime || new Date()

  if (unit === 'hours') {
    return setHours(baseDate, numericValue)
  } else {
    return setMinutes(baseDate, numericValue)
  }
}
