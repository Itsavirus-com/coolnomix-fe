import { useEffect, useState } from 'react'

const useNetworkStatus = () => {
  const [isOnline, setOnline] = useState(true)

  const updateNetworkStatus = () => {
    if (typeof window !== 'undefined') {
      setOnline(navigator.onLine)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return null
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
