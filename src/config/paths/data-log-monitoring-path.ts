import { createPath } from './path-utils'

import type { PathGenerator } from './path.types'

const DATA_LOG_MONITORING_PATH = '/data-log-monitoring'

export const dataLogMonitoringPath: PathGenerator = () => {
  return createPath(DATA_LOG_MONITORING_PATH)
}
