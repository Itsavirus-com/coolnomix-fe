import { useMemo } from 'react'

export const useSystemHealth = () => {
  const score = 85.6

  const scoreColor = useMemo(() => {
    switch (true) {
      case score >= 75:
        return {
          background: 'bg-blue-dark',
          color: 'text-blue-dark'
        }
      case score >= 50:
        return {
          background: 'bg-orange',
          color: 'text-orange'
        }
      default:
        return {
          background: 'bg-brown',
          color: 'text-brown'
        }
    }
  }, [score])

  return {
    score,
    scoreColor
  }
}
