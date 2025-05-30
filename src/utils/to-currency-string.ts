export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY' | 'CHF' | 'CNY' | 'IDR'

export const toCurrencyString = (
  value: number,
  currency: Currency = 'IDR',
  locale: string = 'id-ID'
) => {
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  })
    .format(value)
    .slice(0, -3)

  return price
}
