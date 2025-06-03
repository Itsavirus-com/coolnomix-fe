import { HealthScoreThreshold, ScoreColorConfig } from './system-health.types'

const HEALTH_SCORE_THRESHOLDS: HealthScoreThreshold[] = [
  {
    min: 75,
    config: {
      background: 'bg-blue-dark',
      color: 'text-blue-dark'
    }
  },
  {
    min: 50,
    config: {
      background: 'bg-orange',
      color: 'text-orange'
    }
  },
  {
    min: 0,
    config: {
      background: 'bg-brown',
      color: 'text-brown'
    }
  }
]

export const getScoreColorConfig = (score: number): ScoreColorConfig => {
  const threshold = HEALTH_SCORE_THRESHOLDS.find(({ min }) => score >= min)
  return threshold?.config ?? HEALTH_SCORE_THRESHOLDS[HEALTH_SCORE_THRESHOLDS.length - 1].config
}
