import { Model } from '../middleware/model-adaptor.types'

export type QnAAirconImage = {
  id?: string
  created_at?: string
  updated_at?: string
  name?: string
  path: string
  image_type?: string
}

export type QnAAirconImageWithImage = {
  id?: string
  created_at?: string
  updated_at?: string
  image_id?: string
  image: QnAAirconImage
}

export type QnAAirconOperatingDetails = {
  id?: string
  created_at?: string
  updated_at?: string
  daily_operating_hours: number
  days_operating_per_week: number
  peak_hours_start: string
  peak_hours_end: string
  hourly_btu: number
  input_power_kw: number
  ratio: string
}

export type QnAAirconInstallationDetails = {
  id?: string
  created_at?: string
  updated_at?: string
  year_of_installation: number
  service_frequency: string
  last_service_date: string
  existing_room_temp: number
  return_air_temp: number
  cold_air_temp: number
  wifi_availability: boolean
}

export type QnAClientBranchUser = {
  id: string
  created_at: string
  updated_at: string
  email: string
  role: number
  confirmed_at: string
}

export type QnAClientBranch = {
  id: string
  created_at: string
  updated_at: string
  user: QnAClientBranchUser
  name: string
}

export type QnaAirconDetails = {
  id?: string
  created_at?: string
  updated_at?: string
  status?: 'phase_1' | 'phase_2'
  client_branch_id?: string
  client_branch?: QnAClientBranch
  aircon_image_id?: string
  aircon_image?: QnAAirconImageWithImage
  brand: string
  model: string
  serial_number: string
  type: string
  number_of_same_type: number
  tariff_low: number
  tariff_high: number
  aircon_operating_details_id?: string
  aircon_operating_details: QnAAirconOperatingDetails
  aircon_installation_details_id?: string
  aircon_installation_details?: QnAAirconInstallationDetails
}

export type QnaAirconDetailsModel = Model<QnaAirconDetails>
