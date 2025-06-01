import { useMemo } from 'react'

type DeviceType = 'IOS' | 'Android' | 'Other'

const detectDevice = (): DeviceType => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'Other'
  }

  const userAgent = navigator.userAgent.toLowerCase()

  if (/iphone|ipad/.test(userAgent)) {
    return 'IOS'
  }
  if (/android/.test(userAgent)) {
    return 'Android'
  }

  return 'Other'
}

const useDeviceDetection = (): DeviceType => {
  const device = useMemo(() => detectDevice(), [])

  return device
}

export default useDeviceDetection
