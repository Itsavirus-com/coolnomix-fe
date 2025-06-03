import { AcPhaseTwoType, DetailsAcType, DetailsBrandType, PeakLoadTarifType } from '@/types/general'

export type StepsFormType = {
  acUnit?: string
  detailsBrand?: DetailsBrandType
  detailsAc?: DetailsAcType
}

export type QnaDetailsFormsStateStore = {
  stepsForm: StepsFormType[]
  peakLoadTarif: PeakLoadTarifType
  acPhaseTwo: AcPhaseTwoType
}
