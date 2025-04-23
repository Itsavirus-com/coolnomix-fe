import { capitalize } from 'lodash'

export const capitalizeWithSeparator = (str: string) => {
  return str.split('-').map(capitalize).join(' ')
}
