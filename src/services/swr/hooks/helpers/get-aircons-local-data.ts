import { QnaDetailsFormsStateStore } from '@/stores/qna-details-forms.types'

import { QnaAirconDetailsModel } from '../../models/qna.types'

export const getAirconsLocalData = (aircons: QnaDetailsFormsStateStore): QnaAirconDetailsModel => {
  const { stepsForm, peakLoadTarif, acPhaseTwo } = aircons

  if (!stepsForm?.length) return { data: [] }

  const { tariff_low, tariff_high } = peakLoadTarif[0] ?? {}

  const phaseTwo = acPhaseTwo[0] ?? {}

  return {
    data: stepsForm.map(({ acUnit, detailsBrand, detailsAc }) => ({
      aircon_image: acUnit
        ? {
            image: {
              path: acUnit
            }
          }
        : {
            image: {
              path: ''
            }
          },
      ...detailsBrand,
      aircon_operating_details: { ...detailsAc },
      aircon_installation_details: {
        ...phaseTwo,
        wifi_availability: phaseTwo.wifi_availability === 'yes'
      },
      tariff_low,
      tariff_high
    })) as QnaAirconDetailsModel['data']
  }
}
