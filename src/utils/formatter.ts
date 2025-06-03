export const formatKw = (value: number, locale: string = 'id-ID'): string => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}
