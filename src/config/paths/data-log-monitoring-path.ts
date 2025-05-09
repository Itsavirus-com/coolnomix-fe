import { createPath } from './path-utils'

import type { PathGeneratorWithParams } from './path.types'

const DATA_LOG_MONITORING_PATH = '/data-log-monitoring'

export const dataLogMonitoringPath: PathGeneratorWithParams = (params) => {
  return createPath(DATA_LOG_MONITORING_PATH, params)
}
