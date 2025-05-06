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

export const qnaTypeAcPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-equipment/ac' })
}

export const qnaTypeRefrigerationPath: PathGenerator = () => {
  return createPath(QNA_PATH, { suffix: 'select-equipment/refrigeration' })
}

export const qnaTypeRefrigerationReviewPath: PathGenerator = () => {
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

export const qnaAcDetailsSuccessPath: PathGeneratorWithParams = ({ type }: any) => {
  return createPath(QNA_PATH, {
    suffix: `select-equipment/ac/${type}/success`
  })
}
