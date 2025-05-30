import {
  AcPhaseTwoType,
  DetailsAcType,
  DetailsBrandType,
  FileType,
  PeakLoadTarifType
} from '@/types/general'
import { convertFilesToBase64, convertToBase64 } from '@/utils/files'

import { qnaDetailsFormsStateStore } from './qna-details-forms'

type StepFormItem = {
  acUnit?: string
  detailsBrand?: DetailsBrandType
  detailsAc?: DetailsAcType
}

const updateStepsForm = <T extends keyof StepFormItem>(items: Array<StepFormItem[T]>, key: T) => {
  qnaDetailsFormsStateStore.state.stepsForm = items?.map((item, index) => ({
    ...(qnaDetailsFormsStateStore.state?.stepsForm?.[index] || {}),
    [key]: item
  }))
}

export const setAcUnit = async (acUnit: FileType[]) => {
  const base64Files = await convertFilesToBase64(acUnit)
  updateStepsForm(base64Files, 'acUnit')
}

export const setDetailsBrand = (detailsBrand: DetailsBrandType[]) => {
  updateStepsForm(detailsBrand, 'detailsBrand')
}

export const setDetailsAc = (detailsAc: DetailsAcType[], peakLoadTarif: PeakLoadTarifType) => {
  updateStepsForm(detailsAc, 'detailsAc')
  qnaDetailsFormsStateStore.state.peakLoadTarif = peakLoadTarif
}

export const setPhaseTwo = async (phaseTwo: AcPhaseTwoType) => {
  const phaseTwoWithBase64 = phaseTwo.map(async (item) => {
    const filterCondition = item.filter_condition
      ? await convertToBase64(item.filter_condition[0])
      : null

    return {
      ...item,
      filter_condition: filterCondition
    }
  })

  qnaDetailsFormsStateStore.state.acPhaseTwo = await Promise.all(phaseTwoWithBase64)
}

export const resetQnaDetailsForms = () => {
  qnaDetailsFormsStateStore.state.stepsForm = []
  qnaDetailsFormsStateStore.state.peakLoadTarif = []
  qnaDetailsFormsStateStore.state.acPhaseTwo = []
}
