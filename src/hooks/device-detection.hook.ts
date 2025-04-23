import { useCallback, useEffect, useState } from 'react'

const detectDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase()

  if (/iphone|ipad/.test(userAgent)) {
    return 'IOS'
  }
  if (/android/.test(userAgent)) {
    return 'Android'
  }

  return 'Other'
}

const useDeviceDetection = () => {
  const [device, setDevice] = useState<'IOS' | 'Android' | 'Other'>(detectDevice)

  const updateDevice = useCallback(() => {
    setDevice(detectDevice())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateDevice)

    return () => {
      window.removeEventListener('resize', updateDevice)
    }
  }, [updateDevice])

  return device
}

export default useDeviceDetection
