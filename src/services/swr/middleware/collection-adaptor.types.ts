export type Collection<K extends string, T extends object> = {
  [key in K]: T[]
} & {
  totalPages: number
  totalItems: number
  currentPage: number
}
