import { createPath } from './path-utils'

import type { PathGenerator, PathGeneratorWithParams } from './path.types'

const QNA_PATH = '/qna'

export const qnaPath: PathGeneratorWithParams = (params) => {
  return createPath(QNA_PATH, params)
}

export const qnaSelectLanguagePath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-language' })
}

export const qnaSelectEquipmentPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-equipment' })
}

export const qnaAcPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-equipment/ac' })
}

export const qnaRefrigerationPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-equipment/refrigeration' })
}

export const qnaRefrigerationReviewPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-equipment/refrigeration/review' })
}

export const qnaAcDetailsPath: PathGeneratorWithParams = ({ type }: any) => {
  return createPath(QNA_PATH, {
    suffix: `select-equipment/ac/${type}`
  })
}

export const qnaAcDetailsReviewPath: PathGeneratorWithParams = ({ type }: any) => {
  return createPath(QNA_PATH, {
    suffix: `select-equipment/ac/${type}/review`
  })
}

export const qnaAcDetailsReviewPhase2Path: PathGeneratorWithParams = ({ type }: any) => {
  return createPath(QNA_PATH, {
    suffix: `select-equipment/ac/${type}/review/phase-two`
  })
}

export const qnaSuccessSubmittedPath: PathGenerator = () => {
  return createPath(QNA_PATH, {
    suffix: 'success-submitted'
  })
}
