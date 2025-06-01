import { useCallback, useEffect, useState } from 'react'

const useNetworkStatus = () => {
  const [isOnline, setOnline] = useState(true)

  const updateNetworkStatus = useCallback(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return
    }

    setOnline(navigator.onLine)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {}
    }

    updateNetworkStatus()

    window.addEventListener('online', updateNetworkStatus)
    window.addEventListener('offline', updateNetworkStatus)

    return () => {
      window.removeEventListener('online', updateNetworkStatus)
      window.removeEventListener('offline', updateNetworkStatus)
    }
  }, [])

  return { isOnline }
}

export default useNetworkStatus
