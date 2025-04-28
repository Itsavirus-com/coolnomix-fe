import { createPath } from './path-utils'

import type { PathGenerator, PathGeneratorWithParams } from './path.types'

const QNA_PATH = '/qna'

export const qnaPath: PathGeneratorWithParams = (params) => {
  return createPath(QNA_PATH, params)
}

export const qnaStartPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'start' })
}

export const qnaStartTypePath: PathGeneratorWithParams = ({ lang }: any) => {
  return createPath(QNA_PATH, {
    suffix: `start/${lang}`
  })
}

export const qnaTypeAcPath: PathGeneratorWithParams = (params: any) => {
  return createPath(QNA_PATH, {
    suffix: `start/${params.lang}/ac`
  })
}

export const qnaAcDetailsPath: PathGeneratorWithParams = ({ lang, type }: any) => {
  return createPath(QNA_PATH, {
    suffix: `start/${lang}/ac/${type}`
  })
}

export const qnaTypeRefrigerationPath: PathGeneratorWithParams = ({ lang }: any) => {
  return createPath(QNA_PATH, {
    suffix: `start/${lang}/refrigeration`
  })
}
