import type { Collection } from '../middleware/collection-adaptor.types'

export type UserModel = {
  id: number
  name: string
  fullName: string
  email: string
  emailVerified: boolean
  telephoneNumber: string
  phoneNumberVerified: boolean
  address: string
  city: string
  nationality: string
  avatar: string
  joinDate: string
}

export type UserCollection = Collection<'data', UserModel>
