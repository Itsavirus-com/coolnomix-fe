import { keys, load, remove, save } from '@/utils/storage'

import type { Cache } from 'swr'

export const persistenceCacheProvider = (): Cache => ({
  get: (key) => load(key),
  delete: (key) => remove(key),
  set: (key, value) => save(key, value),
  keys: () => keys()[Symbol.iterator]()
})
